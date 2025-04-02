"use client";

import { styled, Box } from '@mui/material';

export const NoDataFoundWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== 'height',
})(({ theme, height = '250px' }) => ({
  textAlign: 'center',
  fontWeight: theme.typography.fontWeightMedium,
  marginTop: theme.spacing(4),

  '.lottieBox': {
    height,
  },
}));
