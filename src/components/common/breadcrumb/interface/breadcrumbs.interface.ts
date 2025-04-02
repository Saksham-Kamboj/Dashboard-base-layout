import { RoutePathEnum } from '@/enum';

export interface IBreadcrumbsKeyString {
  [key: string]: string;
}

export interface IBreadcrumbDisplay {
  name: string;
  path: RoutePathEnum;
  forwardParam: boolean;
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumbDisplay[];
}
