import { proxy } from 'valtio';
import { useProxy } from 'valtio/utils';

import { devtools } from './devtools.js';

export function defineStore<T extends object>(
  name: string,
  initialObject: T
): [T, () => T] {
  const store = proxy(initialObject);

  // 啟用 Redux DevTools Extension 來 debug Valtio
  devtools(store, {
    name,
    enabled: true
  });

  function useStore(): T {
    return useProxy(store) as T;
  }

  return [store, useStore];
}
