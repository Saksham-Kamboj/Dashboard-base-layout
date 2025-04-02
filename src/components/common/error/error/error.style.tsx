"use client";

import { styled, Box } from '@mui/material';

export const ErrorWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: theme.typography.h2.color,
  fontWeight: theme.typography.fontWeightMedium,
  maxWidth: '800px',

  '.lottieBox': {
    height: '200px',
  },
}));
