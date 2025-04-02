import React, { ReactElement } from "react";
import Lottie from "lottie-react";
import { AnimationSegment } from "lottie-web";

import { Typography } from "@mui/material";
import { Spacing, SpacingEnum } from "@/components/common/spacing";

import { NoDataFoundWrapper } from "./noDataFound.style";

interface INoDataFoundProps {
  title: string;
  height?: string;
  caption?: string;
  animation?: unknown;
  keyframe?: AnimationSegment;
}
/**
 * No Data Found Component
 * @param {INoDataFoundProps} props
 * @return {ReactElement}
 */
export function NoDataFound({
  title,
  height,
  caption,
  animation,
  keyframe,
}: INoDataFoundProps): ReactElement {
  return (
    <NoDataFoundWrapper height={height}>
      <Lottie
        animationData={animation}
        loop
        renderer="svg"
        autoplay
        className="lottieBox"
        initialSegment={keyframe}
      />
      <Spacing spacing={3} variant={SpacingEnum.VERTICAL}>
        <Typography variant="h6">{title}</Typography>
        <Spacing spacing={1} variant={SpacingEnum.TOP} />
        <Typography variant="body1">{caption}</Typography>
      </Spacing>
    </NoDataFoundWrapper>
  );
}

export default NoDataFound;
