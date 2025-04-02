"use client";

import { ThemeOptions, useMediaQuery } from "@mui/material";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useCallback,
  JSX,
} from "react";
import { darkThemeOptions, lightThemeOptions } from "@/components/theme";

export interface ISettings {
  direction?: "ltr" | "rtl";
  responsiveFontSizes?: boolean;
  theme: string;
  themeOption: ThemeOptions;
}

export interface ISettingsContextValue {
  settings: ISettings;
  saveSettings: (update: ISettings) => void;
}

interface ISettingsProviderProps {
  children: ReactNode;
}

const initialSettings: ISettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: "light",
  themeOption: lightThemeOptions,
};

export const SettingsContext = createContext<ISettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => ({}),
});

/**
 * Settings Provider
 * @param {ISettingsProviderProps} props
 * @return {JSX.Element}
 */
export function SettingsProvider(props: ISettingsProviderProps): JSX.Element {
  const { children } = props;
  const [settings, setSettings] = useState<ISettings>(initialSettings);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  /**
   * restore settings from local storage
   * @return {ISettings | null}
   */
  const restoreSettings = useCallback((): ISettings | null => {
    let restoreSetting = null;

    try {
      const storedData: string | null =
        globalThis.localStorage.getItem("settings");

      if (storedData) {
        restoreSetting = JSON.parse(storedData);
      } else {
        restoreSetting = {
          direction: "ltr",
          responsiveFontSizes: true,
          theme: prefersDarkMode ? "dark" : "light",
          themeOption: prefersDarkMode ? darkThemeOptions : lightThemeOptions,
        };
      }
    } catch (err) {
      console.error(err);
    }

    return restoreSetting;
  }, [prefersDarkMode]);

  /**
   * store in local storage
   */
  const storeSettings = useCallback((storeSetting: ISettings): void => {
    globalThis.localStorage.setItem("settings", JSON.stringify(storeSetting));
  }, []);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, [restoreSettings]);

  /**
   * save settings in local storage
   */
  const saveSettings = useCallback(
    (updatedSettings: ISettings): void => {
      setSettings(updatedSettings);
      storeSettings(updatedSettings);
    },
    [storeSettings]
  );
  const value = useMemo(
    () => ({
      settings,
      saveSettings,
    }),
    [saveSettings, settings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

export const useSettings = (): ISettingsContextValue =>
  useContext(SettingsContext);
