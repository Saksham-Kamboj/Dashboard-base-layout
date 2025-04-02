"use client";

import React, { JSX, useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useChart } from "../context/chart-context";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <div>Loading chart...</div>,
});

interface IChartProps {
  type:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  series: any[];
  width?: string | number;
  height?: string | number;
  options?: any;
}

export const Chart = (props: IChartProps): JSX.Element => {
  const { options = {}, ...rest } = props;

  const { id } = useChart();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize options to avoid unnecessary renders
  const newOptions = useMemo(() => {
    const clonedOptions = _.cloneDeep(options);
    _.set(clonedOptions, "chart.id", id);
    return clonedOptions;
  }, [options, id]);

  if (!isClient) {
    return (
      <div
        style={{
          width: rest.width || "100%",
          height: rest.height || "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        Loading chart...
      </div>
    );
  }

  return <ReactApexChart {...rest} options={newOptions} />;
};
