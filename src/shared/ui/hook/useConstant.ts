import { useRef } from 'react';

export function useConstant<T>(func: () => T): T {
  const ref = useRef<T | undefined>(undefined);

  if (!ref.current) {
    ref.current = func();
  }

  return ref.current;
}
