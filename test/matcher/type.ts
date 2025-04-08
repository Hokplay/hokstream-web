// ref: https://github.com/vitest-dev/vitest/blob/v3.0.8/packages/expect/src/types.ts

export interface MatcherState {
  utils: {
    matcherHint(matcherName: string): string;
    printReceived(object: unknown): string;
    printExpected(value: unknown): string;
  };
}

interface SyncExpectationResult {
  pass: boolean;
  message(): string;
}

type AsyncExpectationResult = Promise<SyncExpectationResult>;

export type ExpectationResult = SyncExpectationResult | AsyncExpectationResult;

interface CustomMatchers<R = unknown> {
  toBeSameDateString(expected: string): R;
  toBeSameISOString(expected: Date): R;
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
