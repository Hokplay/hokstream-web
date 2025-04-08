// ref: https://github.com/ant-design/ant-design/blob/5.23.0/tests/setup.ts
import { vi } from 'vitest';

export function fillWindowEnv(window: Window) {
  if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn(query => ({
        matches: query.includes('max-width'),
        addListener: vi.fn(),
        removeListener: vi.fn()
      }))
    });
  }
}
