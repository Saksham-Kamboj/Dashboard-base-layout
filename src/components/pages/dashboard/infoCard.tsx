import React, { ReactElement } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IInfoCardProps {
  icon: IconDefinition;
  data: number;
  title: string;
  lastWeekCount?: number;
  weekTitle?: string;
  progress?: number; // Add progress prop (0-100)
  progressColor?: string; // Optional color for progress bar
}

/**
 * InfoCard Component
 * @param {IInfoCardProps} props
 * @return {ReactElement}
 */
export function InfoCard(props: IInfoCardProps): ReactElement {
  const {
    icon,
    data,
    title,
    progress = 0,
    progressColor = "primary.main",
  } = props;

  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          py: 1,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          "&:last-child": { pb: 1 },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="self-start"
        >
          <Box
            sx={{
              height: "30px",
              width: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "primary.dark",
            }}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </Box>
          <Typography variant="h5" fontWeight={700}>
            {data}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Circular Progress Bar */}
          <CircularProgress
            variant="determinate"
            value={progress}
            size={40}
            thickness={4}
            sx={{
              color: progressColor,
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              fontWeight="bold"
            >
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
