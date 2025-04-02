"use client";

import { Box, Grid, styled } from '@mui/material';

export const GridActionItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const PageHeaderBox = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(1),
}));
