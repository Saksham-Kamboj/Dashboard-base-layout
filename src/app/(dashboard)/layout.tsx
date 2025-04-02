"use client";

import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { MuiIcons } from "@/components/common/icon";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { usePathname, useRouter } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ekvayu_logo from "@/assets/ekvayu-logo.png";
import UserProfileHeader from "@/components/common/user-profile-header";

const NAVIGATION: Navigation = [
  {
    segment: "admin",
    title: "Dashboard",
    icon: <MuiIcons.DashboardIcon />,
  },
  {
    segment: "admin/plugin",
    title: "Plugin",
    icon: <MuiIcons.ExtensionIcon />,
    children: [
      {
        segment: "available-license",
        title: "Available license",
        icon: <MuiIcons.VpnKeyIcon />,
      },
      {
        segment: "agent-installed",
        title: "Agent installed",
        icon: <MuiIcons.ComputerIcon />,
      },
      {
        segment: "allocated-license",
        title: "Allocated license",
        icon: <MuiIcons.AssignmentIcon />,
      },
      {
        segment: "all-license-report",
        title: "All license report",
        icon: <MuiIcons.AssessmentIcon />,
      },
    ],
  },
  {
    segment: "admin/phishing-mails",
    title: "Phishing mails",
    icon: <MuiIcons.EmailIcon />,
  },
  {
    segment: "admin/disputes",
    title: "Disputes",
    icon: <MuiIcons.GavelIcon />,
  },
  {
    segment: "admin/report",
    title: "Report",
    icon: <MuiIcons.AssessmentIcon />,
  },
  {
    segment: "admin/sandbox",
    title: "Sandbox",
    icon: <MuiIcons.SecurityIcon />,
    children: [
      {
        segment: "running-sandbox",
        title: "Running Sandbox",
        icon: <MuiIcons.PlayArrowIcon />,
      },
      {
        segment: "completed-sandbox",
        title: "Completed Sandbox",
        icon: <MuiIcons.DoneIcon />,
      },
    ],
  },
  {
    segment: "admin/quarantine",
    title: "Quarantine",
    icon: <MuiIcons.FolderSpecialIcon />,
  },
  {
    segment: "admin/rogue-db",
    title: "RogueDB",
    icon: <MuiIcons.StorageIcon />,
    children: [
      {
        segment: "urls",
        title: "Urls",
        icon: <MuiIcons.LinkIcon />,
      },
      {
        segment: "domains",
        title: "Domains",
        icon: <MuiIcons.DomainIcon />,
      },
      {
        segment: "mails",
        title: "Mails",
        icon: <MuiIcons.MailIcon />,
      },
    ],
  },
  {
    segment: "admin/logs-report",
    title: "Logs report",
    icon: <MuiIcons.BugReportIcon />,
    children: [
      {
        segment: "exception-logs",
        title: "Exception Logs",
        icon: <MuiIcons.WarningIcon />,
      },
      {
        segment: "error-logs",
        title: "Error Logs",
        icon: <MuiIcons.ErrorIcon />,
      },
    ],
  },
  {
    segment: "profile",
    title: "Profile",
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
        src={ekvayu_logo}
        alt="Ekvayu logo"
        className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "14px", sm: "1rem", md: "20px" }, // Adjust font size for different screen sizes
        }}
      >
        Ekvayu Tech
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
          // sidebarFooter: SidebarFooter,
        }}
      >
        <Box className="p-2">{children}</Box>
      </DashboardLayout>
    </AppProvider>
  );
}
