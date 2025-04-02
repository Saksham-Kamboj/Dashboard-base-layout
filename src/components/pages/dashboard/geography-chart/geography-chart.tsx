"use client";

import React from "react";

import { StringHelper } from "@/helpers";
import { ChartContainer, ChartProvider } from "@/components/common/charts";
import { ChartBox } from "../chart-box";
import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "./mockGeoFeatures";
import { mockGeographyData as data } from "./mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const title = "Geography Chart";

  return (
    <ChartProvider id={StringHelper.replaceSpaceToDash(title)}>
      <ChartContainer
        title={title}
        description="This chart shows the total phishings."
      >
        <ChartBox height={250}>
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: "grey",
                  },
                },
                legend: {
                  text: {
                    fill: "grey",
                  },
                },
                ticks: {
                  line: {
                    stroke: "grey",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "grey",
                  },
                },
              },
              legends: {
                text: {
                  fill: "grey",
                },
              },
              tooltip: {
                container: {
                  background:
                    theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
                  color: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
                  fontSize: 12,
                  borderRadius: 2,
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                  padding: "5px 9px",
                },
              },
            }}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 40 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.5}
            borderColor="#ffffff"
            legends={
              !isDashboard
                ? [
                    {
                      anchor: "bottom-left",
                      direction: "column",
                      justify: true,
                      translateX: 20,
                      translateY: -100,
                      itemsSpacing: 0,
                      itemWidth: 94,
                      itemHeight: 18,
                      itemDirection: "left-to-right",
                      itemTextColor: "grey",
                      itemOpacity: 0.85,
                      symbolSize: 18,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#ffffff",
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]
                : undefined
            }
          />
        </ChartBox>
      </ChartContainer>
    </ChartProvider>
  );
};

export default GeographyChart;
