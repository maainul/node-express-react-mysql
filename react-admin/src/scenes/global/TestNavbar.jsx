import { IconButton, InputBase, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const TestNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>Dashboard</Box>
      <Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 4, flex: 1 }} placeholder="Search" />
          <IconButton>
            <SearchIcon type="button" sx={{ p: 1 }} />
          </IconButton>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
