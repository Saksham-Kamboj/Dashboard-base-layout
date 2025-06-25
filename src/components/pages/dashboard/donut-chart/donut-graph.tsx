import { ReactElement } from "react";
import { StringHelper } from "@/helpers/string.helper";
import {
  Chart,
  ChartContainer,
  ChartProvider,
} from "@/components/common/charts";
import { ChartBox } from "../chart-box";
import { DonutChartController } from "./donut-grapg.controller";

export function DonutChart(): ReactElement {
  const { getters } = DonutChartController();
  const { title, chartOptions, series, enableButton } = getters;

  return (
    <ChartProvider id={StringHelper.replaceSpaceToDash(title)}>
      <ChartContainer
        title={title}
        description="This chart shows the distribution across categories."
        disableAction={enableButton}
      >
        <ChartBox
          height={250}
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Chart
            height="100%"
            width="100%"
            options={chartOptions}
            series={[{ data: series }]}
            type="donut"
          />
        </ChartBox>
      </ChartContainer>
    </ChartProvider>
  );
}