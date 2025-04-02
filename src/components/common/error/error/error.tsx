import React, { ReactElement } from "react";
import Lottie from "lottie-react";
import { Backdrop, Typography } from "@mui/material";

import { Spacing, SpacingEnum } from "@/components/common/spacing";

import { ErrorWrapper } from "./error.style";

interface IErrorProps {
  title: string;
  caption?: string;
  hasError: boolean;
  animation?: unknown;
}

/**
 * Error Component
 * @param {IErrorProps} props
 * @return {ReactElement}
 */
export function Error({
  title,
  caption,
  hasError,
  animation,
}: IErrorProps): ReactElement {
  return (
    <Backdrop
      open={hasError}
      style={{ backgroundColor: "white", zIndex: 1000 }}
    >
      <ErrorWrapper>
        <Lottie
          animationData={animation}
          loop
          renderer="svg"
          autoplay
          className="lottieBox"
        />
        <Typography variant="h2">{title}</Typography>
        <Spacing spacing={3} variant={SpacingEnum.TOP} />
        <Typography variant="h4">{caption}</Typography>
      </ErrorWrapper>
    </Backdrop>
  );
}
