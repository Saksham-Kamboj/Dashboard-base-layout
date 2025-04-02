"use client";

import { useMemo } from "react";
import { Theme, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { ChartsCsvHeaderEnum } from "@/enum";
import { ThemeEnum } from "@/components/theme";

export interface IBarData {
  time: Date;
  count: number;
  day: number;
  month: number;
  year: number;
  xAxisLabel: string;
}

interface ITotalMessageControllerResponses {
  getters: {
    chartOptions: ApexOptions;
    title: string;
    series: number[];
    enableButton: boolean;
  };
}

export function BarGraphController(): ITotalMessageControllerResponses {
  const theme: Theme = useTheme();

  // Generate 12 months data dynamically
  const barGraph = useMemo<IBarData[]>(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return months.map((month, index) => ({
      xAxisLabel: month,
      count: Math.floor(Math.random() * 500) + 100, // Random value between 100-600
      time: new Date(
        `2024-${(index + 1).toString().padStart(2, "0")}-01T00:00:00Z`
      ),
      day: 1,
      month: index + 1,
      year: 2024,
    }));
  }, []);

  const chartData = barGraph.length;
  const enableButton = !!chartData;

  const series = useMemo(
    () => barGraph.map((graphData) => graphData.count),
    [barGraph]
  );

  const columns = useMemo(
    () => barGraph.map((graphData) => graphData.xAxisLabel),
    [barGraph]
  );

  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        background: theme.palette.background.paper,
        stacked: true,
        toolbar: {
          show: false,
          export: {
            csv: {
              headerCategory: ChartsCsvHeaderEnum.TIME_PERIOD,
            },
          },
        },
      },
      colors: [
        theme.palette.info.light,
        theme.palette.info.main,
        theme.palette.info.dark,
      ],
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: true,
          left: 2,
          top: 2,
          opacity: 0.5,
        },
      },
      fill: {
        opacity: 1,
      },
      grid: {
        borderColor: theme.palette.divider,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      states: {
        active: {
          filter: {
            type: "none",
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        colors: ["transparent"],
        show: true,
        width: 2,
      },
      theme: {
        mode:
          theme.palette.mode === ThemeEnum.DARK
            ? ThemeEnum.DARK
            : ThemeEnum.LIGHT,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: columns,
        labels: {
          style: {
            colors: theme.palette.text.primary,
          },
        },
      },
      yaxis: {
        labels: {
          offsetX: -12,
          style: {
            colors: theme.palette.text.primary,
          },
        },
      },
    }),
    [columns, theme]
  );

  const title = "Total Messages";

  return {
    getters: { title, chartOptions, series, enableButton },
  };
}
