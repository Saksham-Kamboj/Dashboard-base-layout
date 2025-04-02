import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage: boolean;
}

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const pathname = usePathname();

  // Skip the admin group in the path
  const pathWithoutAdmin = pathname.replace(/^\/(admin)/, "");

  // Split the path into segments
  const segments = pathWithoutAdmin.split("/").filter(Boolean);

  // Create breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add home
  breadcrumbs.push({
    label: "Home",
    href: "/",
    isCurrentPage: segments.length === 0,
  });

  // Add path segments
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Format the label (capitalize and replace hyphens with spaces)
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrentPage: index === segments.length - 1,
    });
  });

  return breadcrumbs;
};
