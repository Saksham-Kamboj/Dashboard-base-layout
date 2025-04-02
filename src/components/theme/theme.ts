import {
  createTheme,
  Theme,
  responsiveFontSizes,
  Direction,
  ThemeOptions,
} from '@mui/material';

import { baseThemeOptions } from './base-theme-options';

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
  themeOptions: ThemeOptions;
}

export const createMuiTheme = (config: ThemeConfig): Theme => {
  let theme = createTheme(baseThemeOptions, config.themeOptions, {
    direction: config.direction,
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
