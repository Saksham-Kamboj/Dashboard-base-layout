"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import { InfoCard } from "./infoCard";
import {
  faEnvelope,
  faFlask,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { DashboardController } from "./dashboard.controller";
import { BarGraph } from "./bar-charts/bar-graph";
import { LineGraph } from "./line-chart/line-graph";
import { PageHeader, Spacing, SpacingEnum } from "@/components/common";
import { DonutChart } from "./donut-chart/donut-graph";
import { LatestData } from "./latest-data/table";
import GeographyChart from "./geography-chart/geography-chart";

export default function AdminDashboard() {
  const { getters } = DashboardController();
  const { breadcrumbs } = getters;

  const cardData = [
    { title: "Item 1", data: 689, icon: faEnvelope, progress: 40 },
    { title: "Item 2", data: 3320, icon: faFlask, progress: 55 },
    { title: "Item 3", data: 851, icon: faCheckCircle, progress: 80 },
    {
      title: "Item 4",
      data: 1456,
      icon: faExclamationTriangle,
      progress: 75,
    },
  ];

  return (
    <>
      <PageHeader title="Dashboard" breadcrumbs={breadcrumbs} actions={""} />
      <Spacing spacing={1.5} variant={SpacingEnum.BOTTOM} />
      <Grid
        spacing={0}
        margin={0}
        padding={0}
        width={"100%"}
        justifyContent={"space-between"}
        gap={1}
        container
      >
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} md={2.9}>
            <InfoCard
              data={card.data}
              title={card.title}
              icon={card.icon}
              progress={card.progress}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ p: 0, mt: 2 }}>
        <Grid container spacing={0} margin={0} padding={0} gap={1} justifyContent={"space-between"}>
          <Grid item xs={12} md={6.9}>
            <LineGraph />
          </Grid>
          <Grid item xs={12} md={5}>
            <LatestData />
          </Grid>
          <Grid item xs={12} md={3.9}>
            <DonutChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <BarGraph />
          </Grid>
          <Grid item xs={12} md={3.9}>
            <Box>
              <GeographyChart isDashboard={true} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
