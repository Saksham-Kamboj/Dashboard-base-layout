import { useState } from "react";
import { useColorScheme } from "@mui/material/styles";
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Stack,
  ListItemIcon,
  Popover,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { MuiIcons } from "./icon";

function CustomThemeSwitcher({ onClose }: { onClose: () => void }) {
  const { mode, setMode } = useColorScheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as "light" | "dark" | "system");
    onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <RadioGroup value={mode} onChange={handleThemeChange}>
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default function UserProfile() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const themeOpen = Boolean(themeAnchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeClick = (event: React.MouseEvent<HTMLElement>) => {
    setThemeAnchorEl(event.currentTarget);
  };

  const handleThemeClose = () => {
    setThemeAnchorEl(null);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton
        onClick={handleClick}
        sx={{
          p: 0,
          display: "flex",
          alignItems: "center",
          minWidthwidth: { xs: "120px", sm: "160px", md: "200px" },
        }}
      >
        <Avatar
          alt="User"
          src="/path-to-user-image.jpg"
          sx={{
            width: { xs: "30px", sm: "30px", md: "40px" }, // Adjust avatar size based on screen width
            height: { xs: "30px", sm: "30px", md: "40px" }, // Keep width and height equal
          }}
        />
        <Typography
          variant="body1"
          sx={{
            ml: 1, // Margin for spacing
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Adjust font size based on screen width
            whiteSpace: "nowrap", // Prevents text from wrapping
            overflow: "hidden", // Hides overflow text
            textOverflow: "ellipsis", // Adds "..." for truncated text
            maxWidth: { xs: "80px", sm: "120px", md: "150px" }, // Set max width for truncation
          }}
        >
          John Doe ugfcb uhgv
        </Typography>
        <MuiIcons.ArrowDropDownIcon
          sx={{
            fontSize: { xs: "16px", sm: "20px" }, // Adjust icon size
          }}
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={() => {
            router.push("/admin/profile");
            handleClose();
          }}
        >
          <ListItemIcon>
            <MuiIcons.CancelIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleThemeClick}>
          <ListItemIcon>
            <MuiIcons.PaletteIcon fontSize="small" />
          </ListItemIcon>
          Change Theme
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            router.push("/auth/login");
            handleClose();
          }}
        >
          <ListItemIcon>
            <MuiIcons.LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Popover
        open={themeOpen}
        anchorEl={themeAnchorEl}
        onClose={handleThemeClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <CustomThemeSwitcher onClose={handleThemeClose} />
      </Popover>
    </Stack>
  );
}
