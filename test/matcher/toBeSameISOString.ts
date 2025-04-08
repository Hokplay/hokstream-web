import type { MatcherState } from './type.ts';
import { makeExpectationResult } from './makeExpectationResult.ts';

export function toBeSameISOString(
  this: MatcherState,
  actual: Date,
  expected: Date
) {
  return makeExpectationResult.call(this, {
    matcherName: toBeSameISOString.name,
    expected: expected.toISOString(),
    received: actual.toISOString()
  });
}
