import type { MatcherState } from './type.ts';
import { makeExpectationResult } from './makeExpectationResult.ts';

export function toBeSameDateString(
  this: MatcherState,
  actual: Date,
  expected: string
) {
  const received = actual.toISOString().split('T').at(0);

  return makeExpectationResult.call(this, {
    matcherName: toBeSameDateString.name,
    expected,
    received
  });
}
