"use client";

import { useMemo } from "react";
import useMeasure, { RectReadOnly } from "react-use-measure";
import { DateTime } from "luxon";
import { RoutePathEnum } from "@/enum";
import { IBreadcrumbDisplay } from "@/components/common/breadcrumb";
import { MeasureRefType } from "@/interfaces";

interface DateRange {
  startDate: DateTime;
  endDate: DateTime;
}

interface IDashboardController {
  getters: {
    breadcrumbs: IBreadcrumbDisplay[];
    ref: MeasureRefType;
    top5Measure: RectReadOnly;
  };
  handlers: {
    handleDate: (dateRange: DateRange) => void;
  };
}

/**
 * Dashboard controller
 * @return {IDashboardController}
 */
export function DashboardController(): IDashboardController {
  const [ref, top5Measure] = useMeasure();

  /**
   * Handle date function
   * @param {DateRange} dateRange - Contains start and end date
   */
  const handleDate = ({ startDate, endDate }: DateRange) => {
    console.log("Selected Date Range:", startDate.toISO(), endDate.toISO());
    // You can update state or perform any action here
  };

  const breadcrumbs = useMemo(
    () => [
      {
        name: "Dashboard",
        path: RoutePathEnum.NONE,
        forwardParam: false,
      },
    ],
    []
  );

  return {
    handlers: {
      handleDate,
    },
    getters: {
      breadcrumbs,
      ref: ref as MeasureRefType,
      top5Measure,
    },
  };
}
