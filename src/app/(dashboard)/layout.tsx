"use client";

import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { MuiIcons } from "@/components/common/icon";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { usePathname, useRouter } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import UserProfileHeader from "@/components/common/user-profile-header";

const NAVIGATION: Navigation = [
  {
    segment: "admin",
    title: "Dashboard",
    icon: <MuiIcons.DashboardIcon />,
  },
  {
    segment: "admin/group1",
    title: "Group 1",
    icon: <MuiIcons.ExtensionIcon />,
    children: [
      {
        segment: "admin/group1/child1",
        title: "Child 1",
        icon: <MuiIcons.VpnKeyIcon />,
      },
      {
        segment: "admin/group1/child2",
        title: "Child 2",
        icon: <MuiIcons.ComputerIcon />,
      },
      {
        segment: "admin/group1/child3",
        title: "Child 3",
        icon: <MuiIcons.AssignmentIcon />,
      },
      {
        segment: "admin/group1/child4",
        title: "Child 4",
        icon: <MuiIcons.AssessmentIcon />,
      },
    ],
  },
  {
    segment: "admin/group2",
    title: "Group 2",
    icon: <MuiIcons.EmailIcon />,
  },
  {
    segment: "admin/group3",
    title: "Group 3",
    icon: <MuiIcons.GavelIcon />,
  },
  {
    segment: "admin/group4",
    title: "Group 4",
    icon: <MuiIcons.AssessmentIcon />,
  },
  {
    segment: "admin/group5",
    title: "Group 5",
    icon: <MuiIcons.SecurityIcon />,
    children: [
      {
        segment: "admin/group5/child1",
        title: "Child 1",
        icon: <MuiIcons.PlayArrowIcon />,
      },
      {
        segment: "admin/group5/child2",
        title: "Child 2",
        icon: <MuiIcons.DoneIcon />,
      },
    ],
  },
  {
    segment: "admin/group6",
    title: "Group 6",
    icon: <MuiIcons.FolderSpecialIcon />,
  },
  {
    segment: "admin/group7",
    title: "Group 7",
    icon: <MuiIcons.StorageIcon />,
    children: [
      {
        segment: "admin/group7/child1",
        title: "Child 1",
        icon: <MuiIcons.LinkIcon />,
      },
      {
        segment: "admin/group7/child2",
        title: "Child 2",
        icon: <MuiIcons.DomainIcon />,
      },
      {
        segment: "admin/group7/child3",
        title: "Child 3",
        icon: <MuiIcons.MailIcon />,
      },
    ],
  },
  {
    segment: "admin/group8",
    title: "Group 8",
    icon: <MuiIcons.BugReportIcon />,
    children: [
      {
        segment: "admin/group8/child1",
        title: "Child 1",
        icon: <MuiIcons.WarningIcon />,
      },
      {
        segment: "admin/group8/child2",
        title: "Child 2",
        icon: <MuiIcons.ErrorIcon />,
      },
    ],
  },
  {
    segment: "admin/group9",
    title: "Group 9",
    icon: <MuiIcons.PersonIcon />,
  },
];

// Create a basic theme without color scheme settings
const initialTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
      lgplus: 1400,
      sd: 1800,
      xxl: 2100,
    },
  },
  // Add the missing required properties
  navigationBar: {
    text: "",
    width: 0,
    background: "",
    hover: {
      background: "",
    },
    active: {
      color: "",
      background: "",
    },
    scrollbar: {
      shadow: "",
      thumb: {
        color: "",
        outline: "",
      },
    },
  },
  loader: {
    primary: "",
    secondary: "",
  },
});

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Image
        src={'https://images.pexels.com/photos/1416900/pexels-photo-1416900.jpeg'}
        alt="Logo"
        width={100}
        height={100}
        loading="lazy"
        className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 rounded-full object-cover" // Adjust size for different screen sizes
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "14px", sm: "1rem", md: "20px" }, // Adjust font size for different screen sizes
        }}
      >
        Admin Dashboard
      </Typography>
    </Stack>
  );
}

export default function DashboardLayoutBase({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useDemoRouter("/");
  const router = useRouter();
  const pathname = usePathname();

  // Use state for theme to avoid hydration mismatch
  const [theme, setTheme] = useState(initialTheme);

  // Apply color scheme after component mounts to avoid hydration issues
  useEffect(() => {
    // Now it's safe to create a theme with color scheme
    const fullTheme = createTheme({
      cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
      },
      colorSchemes: { light: true, dark: true },
      breakpoints: initialTheme.breakpoints,
      navigationBar: initialTheme.navigationBar,
      loader: initialTheme.loader,
    });

    setTheme(fullTheme);
  }, []);

  const adaptedRouter = {
    pathname: pathname || "/",
    searchParams: new URLSearchParams(),
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
    prefetch: (path: string) => router.prefetch?.(path),
    reload: () => router.refresh?.(),
    navigate: (url: string | URL) => {
      router.push(url.toString());
    },
  };

  return (
    <AppProvider navigation={NAVIGATION} router={adaptedRouter} theme={theme}>
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: UserProfileHeader,
        }}
      >
        <Box className="p-2">{children}</Box>
      </DashboardLayout>
    </AppProvider>
  );
}
