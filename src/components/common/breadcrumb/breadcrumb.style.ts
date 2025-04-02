'use client';

import { Box, styled, Typography } from '@mui/material';

export const BaseBreadcrumbCard = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const BreadcrumbText = styled(Typography, {
  shouldForwardProp: (props) => props !== 'clickable',
})<{ clickable?: boolean }>(({ theme, clickable = false }) => {
  if (!clickable) {
    return null;
  }
  return { cursor: 'pointer', color: theme.palette.primary.main };
});
