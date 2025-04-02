import { alpha, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

/**
 *  Circle svg
 * @return {ReactElement}
 */
export function Circle(): ReactElement {
  const theme = useTheme();
  let color: string;
  if (theme.palette.mode === 'dark') {
    color = alpha(theme.palette.clickableCard.disabled, 0.1);
  } else {
    color = alpha(theme.palette.clickableCard.disabled, 0.5);
  }

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="circle" cx="21" cy="21" r="21" fill="#6B7280" />
    </svg>
  );
}
