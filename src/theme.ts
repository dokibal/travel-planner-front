// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#d1b3ff",
      main: "#7e57c2",
      dark: "#4a148c",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff80ab",
      main: "#f06292",
      dark: "#c2185b",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
  },
});

export default theme;
