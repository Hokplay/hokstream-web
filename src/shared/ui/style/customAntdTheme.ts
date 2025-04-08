import { ThemeConfig as AntdThemeConfig, theme as antdTheme } from 'antd';
import { AliasToken as AntdAliasToken } from 'antd/es/theme/interface';

interface CustomAntdAliasToken extends AntdAliasToken {
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  gray13: string;
}

interface CustomAntdThemeConfig extends AntdThemeConfig {
  token: Partial<CustomAntdAliasToken>;
}

export const darkTheme: CustomAntdThemeConfig = {
  /**
   * 將 Antd 提供的 CSS 變數設定在 `.App` 上
   * ref: https://github.com/ant-design/ant-design/issues/47253#issuecomment-1919271896
   */
  cssVar: { key: 'App' },
  algorithm: antdTheme.darkAlgorithm,
  token: {
    gray1: '#ffffff',
    gray2: '#fafafa',
    gray3: '#f5f5f5',
    gray4: '#f0f0f0',
    gray5: '#d9d9d9',
    gray6: '#bfbfbf',
    gray7: '#8c8c8c',
    gray8: '#595959',
    gray9: '#434343',
    gray10: '#262626',
    gray11: '#1f1f1f',
    gray12: '#141414',
    gray13: '#000000'
  }
};

export const lightTheme: CustomAntdThemeConfig = {
  cssVar: { key: 'App' },
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    gray1: '#000000',
    gray2: '#141414',
    gray3: '#1f1f1f',
    gray4: '#262626',
    gray5: '#434343',
    gray6: '#595959',
    gray7: '#8c8c8c',
    gray8: '#bfbfbf',
    gray9: '#d9d9d9',
    gray10: '#f0f0f0',
    gray11: '#f5f5f5',
    gray12: '#fafafa',
    gray13: '#ffffff'
  }
};
