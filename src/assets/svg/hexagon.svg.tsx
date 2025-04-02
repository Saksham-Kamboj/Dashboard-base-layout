import { alpha, useTheme } from "@mui/material";
import React, { ReactElement } from "react";

interface HexagonProps {
  disabled?: boolean;
}
/**
 *  Hexagon svg
 * @param {HexagonProps} props
 * @return {ReactElement}
 */
export function Hexagon(props: HexagonProps): ReactElement {
  const theme = useTheme();
  let color: string;
  const { disabled } = props;
  if (disabled) {
    if (theme.palette.mode === "dark") {
      color = alpha(theme.palette.clickableCard.disabled, 0.1);
    } else {
      color = alpha(theme.palette.clickableCard.disabled, 0.5);
    }
  } else {
    color = alpha(theme.palette.primary.main, 0.15);
  }

  return (
    <svg
      width="56"
      height="62"
      viewBox="0 0 56 62"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 1.3094C26.4752 -0.119662 29.5248 -0.119661 32 1.3094L51.7128 12.6906C54.188 14.1197 55.7128 16.7607 55.7128 19.6188V42.3812C55.7128 45.2393 54.188 47.8803 51.7128 49.3094L32 60.6906C29.5248 62.1197 26.4752 62.1197 24 60.6906L4.28719 49.3094C1.81198 47.8803 0.287188 45.2393 0.287188 42.3812V19.6188C0.287188 16.7607 1.81198 14.1197 4.28719 12.6906L24 1.3094Z"
        fill={color}
      />
    </svg>
  );
}
