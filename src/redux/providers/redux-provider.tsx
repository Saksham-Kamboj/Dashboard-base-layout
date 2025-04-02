"use client";

import {
  MAX_SNACKBAR_AMOUNT,
  SNACKBAR_HORIZONTAL_ALIGNMENT,
  SNACKBAR_VERTICAL_ALIGNMENT,
} from "@/constants";
import { SettingsProvider } from "@/context/settings.context";
import { store } from "@/redux";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <SettingsProvider>
        <SnackbarProvider
          maxSnack={MAX_SNACKBAR_AMOUNT}
          autoHideDuration={2000}
          preventDuplicate
          anchorOrigin={{
            vertical: SNACKBAR_VERTICAL_ALIGNMENT,
            horizontal: SNACKBAR_HORIZONTAL_ALIGNMENT,
          }}
        >
          {/* <ThemeSelectorProvider> */}
            <main>{children}</main>
          {/* </ThemeSelectorProvider> */}
        </SnackbarProvider>
      </SettingsProvider>
    </Provider>
  );
}
