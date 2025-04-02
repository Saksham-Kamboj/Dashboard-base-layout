import React, { ReactElement, ReactNode, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import BaseBreadcrumbs from "@mui/material/Breadcrumbs";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import RoutePathEnum from "@/enum/routePaths.enum";
import SpacingEnum from "@/components/common/spacing/enum";
import Spacing from "@/components/common/spacing/spacing";
import { Icon } from "@/components/common/icon";
import { StringHelper } from "@/helpers";

import { BreadcrumbController } from "./breadcrumb.controller";
import { IBreadcrumbDisplay, IBreadcrumbsProps } from "./interface";
import { BaseBreadcrumbCard, BreadcrumbText } from "./breadcrumb.style";

/**
 * Breadcrumb Component
 * @param {IBreadcrumbsProps} breadcrumbs
 * @return {ReactElement}
 */
export function Breadcrumb({ breadcrumbs }: IBreadcrumbsProps): ReactElement {
  const { handlers, getters } = BreadcrumbController();
  const { isMobileView } = getters;
  const { handleClick } = handlers;

  /**
   * Breadcrumb text data
   * @param {IBreadcrumbDisplay} displayBreadcrumbData
   * @param {number} index
   * @return {ReactElement}
   */
  const breadcrumbTextData = useCallback(
    (
      displayBreadcrumbData: IBreadcrumbDisplay,
      index: number
    ): ReactElement => {
      const { name, path, forwardParam } = displayBreadcrumbData;
      const isClickable: boolean = path !== RoutePathEnum.NONE;
      return (
        <Box key={StringHelper.generateUID(name, index)}>
          <BreadcrumbText
            variant="body2"
            clickable={isClickable}
            onClick={() => handleClick(path, forwardParam)}
          >
            {isMobileView && <Icon icon={faArrowLeft} />}
            {name}
          </BreadcrumbText>
          {isMobileView && <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />}
        </Box>
      );
    },
    [handleClick, isMobileView]
  );

  /**
   * BreadCrumb for desktop view
   */
  const desktopView: ReactNode = useMemo(
    () => breadcrumbs.map(breadcrumbTextData),
    [breadcrumbs, breadcrumbTextData]
  );

  /**
   * BreadCrumb for mobile view
   */
  const mobileView: ReactNode = useMemo(() => {
    const reversedBreadcrumbs: IBreadcrumbDisplay[] = [
      ...breadcrumbs,
    ].reverse();
    for (let i = 0; i < reversedBreadcrumbs.length; i += 1) {
      const breadcrumb: IBreadcrumbDisplay = reversedBreadcrumbs[i];
      if (breadcrumb.path !== RoutePathEnum.NONE) {
        return breadcrumbTextData(breadcrumb, i);
      }
    }
    return <Box />;
  }, [breadcrumbs, breadcrumbTextData]);

  return (
    <BaseBreadcrumbCard>
      <BaseBreadcrumbs aria-label="breadcrumb">
        {isMobileView ? mobileView : desktopView}
      </BaseBreadcrumbs>
    </BaseBreadcrumbCard>
  );
}

export default React.memo(Breadcrumb);
