import { useLayoutEffect, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/es/locale';

import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import { getAntdLocale } from '@/i18n/AntdLocale.ts';

interface AntdConfigProviderProps {
  configs: {
    locale: Locale;
  };
  children: ReactNode;
}

function AntdConfigProvider({ configs, children }: AntdConfigProviderProps) {
  return (
    <ConfigProvider
      locale={configs.locale}
      button={{ autoInsertSpace: false }}
      theme={{
        components: {
          Segmented: {
            trackBg: '#595DA7',
            itemColor: '#ffffff',
            itemHoverColor: '#B4B6B8',
            itemHoverBg: '#595DA7'
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}

interface AntdProviderProps {
  children: ReactNode;
}

export function AntdProvider({ children }: AntdProviderProps) {
  const { locale } = useTranslation();

  const configs = {
    locale: getAntdLocale(locale)
  };

  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: children => (
        <AntdConfigProvider configs={configs}>{children}</AntdConfigProvider>
      )
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return <AntdConfigProvider configs={configs}>{children}</AntdConfigProvider>;
}
