import {
  type Ref,
  type ReactNode,
  type RefAttributes,
  forwardRef as reactForwardRef
} from 'react';

// ref: https://www.totaltypescript.com/forwardref-with-generic-components
// forwardRef with generic component
export function forwardRef<T, Prop = object>(
  render: (props: Prop, ref: Ref<T>) => ReactNode
): (props: Prop & RefAttributes<T>) => ReactNode {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return reactForwardRef(render) as any;
}
