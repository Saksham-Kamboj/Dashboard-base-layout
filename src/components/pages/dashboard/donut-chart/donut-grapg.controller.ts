"use client";

import { useMemo } from "react";
import { Theme, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";

interface IDonutChartControllerResponses {
  getters: {
    chartOptions: ApexOptions;
    title: string;
    series: number[];
    enableButton: boolean;
  };
}

export function DonutChartController(): IDonutChartControllerResponses {
  const theme: Theme = useTheme();

  // Sample data for the donut chart
  const donutSeries = useMemo<number[]>(() => {
    return [44, 55, 41, 17, 15];
  }, []);

  const enableButton = !!donutSeries.length;

  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "donut",
        background: "transparent",
        toolbar: {
          show: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: [
        "Category A",
        "Category B",
        "Category C",
        "Category D",
        "Category E",
      ],
      theme: {
        mode: theme.palette.mode === "dark" ? "dark" : "light",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  return w.globals.seriesTotals
                    .reduce((a: number, b: number) => a + b, 0)
                    .toString();
                },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
    }),
    [theme]
  );

  const title = "Donut Chart Distribution";

  return {
    getters: {
      title,
      chartOptions,
      series: donutSeries,
      enableButton,
    },
  };
}
