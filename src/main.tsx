import { createRoot } from 'react-dom/client';

import 'core-js/stable';

import 'virtual:uno.css';
import 'virtual:unocss-devtools';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/i18n.ts';
import { AntdProvider } from '@/shared/ui/context/Antd.context.tsx';
import App from '@/ui/app/view/App.tsx';

import '@/shared/ui/style/index.scss';

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <AntdProvider>
      <App />
    </AntdProvider>
  </I18nextProvider>
);
