"use client";

import { Card, styled } from '@mui/material';

export const ChartCard = styled(Card, {
  shouldForwardProp: (props) => props !== 'height',
})<{ height?: string | number }>(({ theme, height }) => ({
  height,
  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
  },
}));
