import { useCallback } from "react";
import { SnackbarKey, useSnackbar } from "notistack";

export type ISnackBar = "success" | "error" | "warning" | "info";

export interface ProviderContext {
  enqueueSnackbar: (message: string, variant: ISnackBar) => SnackbarKey;
}

/**
 * @hook {useAppSnackbar} - This is using for snackbar.
 * @return {ProviderContext}
 */
export function useAppSnackbar(): ProviderContext {
  const snackbar = useSnackbar();

  /**
   * @function enqueueSnackbar
   * @param {string} message
   * @return {SnackbarKey}
   */
  const enqueueSnackbar = useCallback(
    (message: string, variant: ISnackBar) =>
      snackbar.enqueueSnackbar(message, {
        variant,
      }),
    [snackbar]
  );

  return { enqueueSnackbar };
}
