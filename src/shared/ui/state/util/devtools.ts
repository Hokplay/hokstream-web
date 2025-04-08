// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { snapshot, subscribe } from 'valtio/vanilla';

const DEVTOOLS = Symbol();

const isDevMode = import.meta.env.MODE === 'dev';

export function devtools(proxyObject, options) {
  if (typeof options === 'string') {
    console.warn(
      'string name option is deprecated, use { name }. https://github.com/pmndrs/valtio/pull/400'
    );
    options = { name: options };
  }
  const { enabled, name = '' } = options || {};
  let extension;
  try {
    extension = (enabled ?? isDevMode) && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
    // ignored
  }
  if (!extension) {
    if (isDevMode && enabled) {
      console.warn('[Warning] Please install/enable Redux devtools extension');
    }
    return;
  }
  let isTimeTraveling = false;
  const devtools = extension.connect({ name });
  const unsub1 = subscribe(proxyObject, ops => {
    const action = ops
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, path]) => path[0] !== DEVTOOLS)
      .map(([op, path]) => `${op}:${path.map(String).join('.')}`)
      .join(', ');
    if (!action) {
      return;
    }
    if (isTimeTraveling) {
      isTimeTraveling = false;
    } else {
      const snapWithoutDevtools = Object.assign({}, snapshot(proxyObject));
      delete snapWithoutDevtools[DEVTOOLS];

      const getterProperties = Object.entries(
        Object.getOwnPropertyDescriptors(Object.getPrototypeOf(proxyObject))
      )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_key, descriptor]) => typeof descriptor.get === 'function')
        .reduce((result, [key, descriptor]) => {
          result[key] = descriptor.get.call(proxyObject);
          return result;
        }, {});

      if (isDevMode) {
        console.log(
          `%c[${name}]`,
          'background: black; color: #b2ebf2; padding: 1px 4px;',
          {
            type: action.replaceAll(/__private_\d+_/g, '#'),
            updatedAt: new Date().toLocaleString(),
            state: { ...snapWithoutDevtools, ...getterProperties }
          }
        );
      }

      devtools.send(
        {
          // 原本只要是 private field 或 private getter，
          // property name 就會以類似 `__private_12_` 的前綴，
          // 改為比官方更易讀的 action，將前綴改為跟原生一樣的 `#`
          type: action.replaceAll(/__private_\d+_/g, '#'),
          updatedAt: new Date().toLocaleString()
        },
        // 比官方多了 getter property 可以看
        { ...snapWithoutDevtools, ...getterProperties }
      );
    }
  });
  const unsub2 = devtools.subscribe(message => {
    if (message.type === 'ACTION' && message.payload) {
      try {
        Object.assign(proxyObject, JSON.parse(message.payload));
      } catch (e) {
        console.error(
          'please dispatch a serializable value that JSON.parse() and proxy() support\n',
          e
        );
      }
    }
    if (message.type === 'DISPATCH' && message.state) {
      if (
        message.payload?.type === 'JUMP_TO_ACTION' ||
        message.payload?.type === 'JUMP_TO_STATE'
      ) {
        isTimeTraveling = true;
        const state = JSON.parse(message.state);
        Object.assign(proxyObject, state);
      }
      proxyObject[DEVTOOLS] = message;
    } else if (
      message.type === 'DISPATCH' &&
      message.payload?.type === 'COMMIT'
    ) {
      devtools.init(snapshot(proxyObject));
    } else if (
      message.type === 'DISPATCH' &&
      message.payload?.type === 'IMPORT_STATE'
    ) {
      const actions = message.payload.nextLiftedState?.actionsById;
      const computedStates =
        message.payload.nextLiftedState?.computedStates || [];
      isTimeTraveling = true;
      computedStates.forEach(({ state }, index) => {
        const action = actions[index] || 'No action found';
        Object.assign(proxyObject, state);
        if (index === 0) {
          devtools.init(snapshot(proxyObject));
        } else {
          devtools.send(action, snapshot(proxyObject));
        }
      });
    }
  });
  devtools.init(snapshot(proxyObject));
  return () => {
    unsub1();
    unsub2?.();
  };
}
