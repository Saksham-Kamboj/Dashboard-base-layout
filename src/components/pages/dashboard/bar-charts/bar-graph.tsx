"use client";

import React, { ReactElement } from "react";

import { StringHelper } from "@/helpers";
import { ChartsTooltipEnum } from "@/enum";
import { BarGraphController } from "./bar-graph.controller";
import {
  Chart,
  ChartContainer,
  ChartProvider,
} from "@/components/common/charts";
import { ChartBox } from "../chart-box";

/**
 * Total Message Graph
 * @return {ReactElement}
 */
export function BarGraph(): ReactElement {
  const { getters } = BarGraphController();
  const { title, chartOptions, series, enableButton } = getters;

  return (
    <ChartProvider id={StringHelper.replaceSpaceToDash(title)}>
      <ChartContainer
        title={title}
        description="This chart shows the total messages exchanged."
        disableAction={enableButton}
      >
        <ChartBox height={250} sx={{ p: "0px 10px 10px 10px" }}>
          <Chart
            height="100%"
            width="100%"
            options={chartOptions}
            series={[{ name: ChartsTooltipEnum.TOTAL_MESSAGE, data: series }]}
            type="bar"
          />
        </ChartBox>
      </ChartContainer>
    </ChartProvider>
  );
}

export default React.memo(BarGraph);
