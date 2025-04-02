"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Theme, useMediaQuery, useTheme } from "@mui/material";

import { RoutePathEnum } from "@/enum";

interface IBreadcrumbController {
  getters: {
    isMobileView: boolean;
  };
  handlers: {
    handleClick: (path: RoutePathEnum, forwardParam: boolean) => void;
  };
}

/**
 * Breadcrumb Controller
 * @return {IBreadcrumbController}
 */
export function BreadcrumbController(): IBreadcrumbController {
  const navigate = useRouter();
  const theme: Theme = useTheme();
  const isMobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));

  /**
   * Add the Parameters to Path to redirect
   * @param {RoutePathEnum} path Path to Redirect
   * @param {boolean} isForwardParam
   */
  const handleClick = useCallback(
    (path: RoutePathEnum, isForwardParam: boolean): void => {
      if (path === RoutePathEnum.NONE) return;
      if (!isForwardParam) {
        navigate.push(path);
        return;
      }
    },
    [navigate]
  );

  return {
    getters: {
      isMobileView,
    },
    handlers: { handleClick },
  };
}
