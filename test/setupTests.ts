import { expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import 'core-js/stable';
import * as matchers from 'jest-extended';

import { fillWindowEnv } from './antdSetupTest.ts';
import { toBeSameDateString } from './matcher/toBeSameDateString.ts';
import { toBeSameISOString } from './matcher/toBeSameISOString.ts';

expect.extend(matchers);

if (typeof window !== 'undefined') {
  fillWindowEnv(window);
}

expect.extend({
  toBeSameDateString,
  toBeSameISOString
});
