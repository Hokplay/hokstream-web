import { captor } from 'vitest-mock-extended';
import { expect } from 'vitest';

export function captureArgForLastCalled<TArg, TTarget = unknown>(
  target: TTarget
): TArg {
  const spyArgCaptor = captor<TArg>();
  expect(target).toHaveBeenCalledWith(spyArgCaptor);
  return spyArgCaptor.value;
}
