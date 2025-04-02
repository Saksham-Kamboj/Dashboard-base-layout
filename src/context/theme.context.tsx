"use client";

import React, {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CssBaseline, Theme, ThemeProvider, ThemeOptions } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { useSettings } from "./settings.context";
import { baseThemeOptions } from "@/components/theme";

interface IThemeSelectorContext {
  toggleDrawer: () => void;
}

type Direction = "ltr" | "rtl";

interface IThemeSelectorProviderProps {
  children: ReactNode;
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: string;
  themeOption: ThemeOptions;
}

const ThemeSelectorContext = createContext<IThemeSelectorContext>(
  {} as IThemeSelectorContext
);

/**
 * Theme Selector Provider
 * @param {IThemeSelectorProviderProps} props
 * @return {ReactElement}
 */
export function ThemeSelectorProvider({
  children,
}: IThemeSelectorProviderProps): ReactElement {
  const [isDrawerOpen, setDrawerState] = useState<boolean>(false);
  const { settings } = useSettings();

  /**
   * Generate Theme
   */
  const generateTheme = useCallback((config: ThemeConfig): Theme => {
    let theme = createTheme(baseThemeOptions, config.themeOption, {
      direction: config.direction,
    });

    if (config.responsiveFontSizes) {
      theme = responsiveFontSizes(theme);
    }

    return theme;
  }, []);

  /**
   * Toggle Drawer
   */
  const toggleDrawer = useCallback(() => {
    setDrawerState(!isDrawerOpen);
  }, [isDrawerOpen]);

  const theme = useMemo(
    () =>
      generateTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        mode: settings.theme,
        themeOption: settings.themeOption,
      }),
    [generateTheme, settings]
  );

  return (
    <ThemeSelectorContext.Provider
      value={useMemo(() => ({ toggleDrawer }), [toggleDrawer])}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
}

export const useThemeSelector = () => useContext(ThemeSelectorContext);
