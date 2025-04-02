"use client";

import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
} from "react";

import { IChartContext, IChartProvider } from "../interfaces";

export const ChartContext = createContext<IChartContext>({} as IChartContext);

export const ChartProvider: FC<IChartProvider> = ({ id, children }) => {
  // Instead of trying to load ApexCharts at the component level,
  // we'll handle the chart operations directly in the callback functions

  const downloadSVG = useCallback(() => {
    if (typeof window === "undefined") return;

    // Dynamically import ApexCharts only when the function is called
    import("apexcharts")
      .then((ApexChartsModule) => {
        try {
          const chart = ApexChartsModule.default.getChartByID(id);
          if (chart && chart.exports) {
            chart.exports.exportToSVG();
          }
        } catch (error) {
          console.error("Error exporting SVG:", error);
        }
      })
      .catch((error) => {
        console.error("Failed to load ApexCharts:", error);
      });
  }, [id]);

  const downloadPNG = useCallback(() => {
    if (typeof window === "undefined") return;

    import("apexcharts")
      .then((ApexChartsModule) => {
        try {
          const chart = ApexChartsModule.default.getChartByID(id);
          if (chart && chart.exports) {
            chart.exports.exportToPng();
          }
        } catch (error) {
          console.error("Error exporting PNG:", error);
        }
      })
      .catch((error) => {
        console.error("Failed to load ApexCharts:", error);
      });
  }, [id]);

  const downloadCSV = useCallback(() => {
    if (typeof window === "undefined") return;

    import("apexcharts")
      .then((ApexChartsModule) => {
        try {
          const chart = ApexChartsModule.default.getChartByID(id);
          if (chart && chart.exports) {
            chart.exports.exportToCSV();
          }
        } catch (error) {
          console.error("Error exporting CSV:", error);
        }
      })
      .catch((error) => {
        console.error("Failed to load ApexCharts:", error);
      });
  }, [id]);

  const value = useMemo(
    () => ({
      id,
      export: {
        svg: downloadSVG,
        png: downloadPNG,
        csv: downloadCSV,
      },
    }),
    [downloadCSV, downloadPNG, downloadSVG, id]
  );

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
};

export default ChartProvider;

export const useChart = () => useContext(ChartContext);
