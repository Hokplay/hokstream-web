import { defineConfig, PluginOption } from 'vite';
import { fileURLToPath, URL } from 'url';
import { configDefaults } from 'vitest/config';

import UnoCSS from 'unocss/vite';
import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin as reactScopedCss } from 'rollup-plugin-react-scoped-css';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import inspect from 'vite-plugin-inspect';
import legacy from '@vitejs/plugin-legacy';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BabelPlugin } from './config/jsx-plus/babel-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isTestMode = mode === 'test';

  return {
    server: {
      port: 3000
    },
    esbuild: {
      supported: {
        'top-level-await': true
      }
    },
    plugins: [
      UnoCSS(),
      react({
        babel: {
          plugins: [
            // 先處理 x-for 後，才處理 x-if
            [BabelPlugin.transformJsxClass],
            [BabelPlugin.transformJsxList],
            [BabelPlugin.transformJsxCondition]
          ]
        }
      }),
      reactScopedCss({
        scopeStyleByDefault: true,
        styleFileExtensions: ['scss'],
        // index.scss 用於全域樣式，不須有 scoped 功能
        exclude: [/src\/shared\/ui\/style\/index.scss.*/, /global\.scss/]
      }) as PluginOption,
      svgr({ include: '**/*.svg' }),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}"'
        }
      }),
      legacy(),
      !isTestMode && inspect()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    test: {
      alias: {
        '@test': fileURLToPath(new URL('./test', import.meta.url))
      },
      exclude: [...configDefaults.exclude, 'config/jsx-plus/**', 'e2e'],
      globals: true,
      environment: 'jsdom',
      globalSetup: 'test/globalSetup.ts',
      setupFiles: ['test/setupTests.ts']
    }
  };
});
