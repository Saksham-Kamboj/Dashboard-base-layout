"use client";

import React, { ReactElement, ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

// import { usePage } from '@/context';
import { Breadcrumb, IBreadcrumbDisplay } from "@/components/common/breadcrumb";

import { GridActionItem, PageHeaderBox } from "./pageHeader.style";

interface IPageHeader {
  title: string;
  breadcrumbs?: IBreadcrumbDisplay[];
  actions: ReactNode;
}

/**
 * Page Header Component
 * @param {IPageHeader} props
 * @return {ReactElement}
 */
export function PageHeader(props: IPageHeader): ReactElement {
  const { title, actions, breadcrumbs } = props;

  return (
    <PageHeaderBox>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          {breadcrumbs && (
            <Breadcrumb breadcrumbs={breadcrumbs ? breadcrumbs : []} />
          )}
        </Grid>
        <GridActionItem item>{actions}</GridActionItem>
      </Grid>
    </PageHeaderBox>
  );
}

export default PageHeader;
