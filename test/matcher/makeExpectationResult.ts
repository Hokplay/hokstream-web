import type { MatcherState, ExpectationResult } from './type.ts';

interface MakeExpectationResultProps {
  matcherName: string;
  expected: unknown;
  received: unknown;
}

export function makeExpectationResult(
  this: MatcherState,
  { matcherName, expected, received }: MakeExpectationResultProps
): ExpectationResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = received === expected;

  const diff = [
    `Expected: ${printExpected(expected)}`,
    `Received: ${printReceived(received)}`
  ].join('\n');

  return {
    pass,
    message() {
      return pass
        ? [matcherHint(`.not.${matcherName}`), '', diff].join('\n')
        : [matcherHint(`.${matcherName}`), '', diff].join('\n');
    }
  };
}
