import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#18365D" },     // Dark Navy
    secondary: { main: "#AA4AC4" },   // Warm Purple
    info: { main: "#00ABC8" },        // Bright Blue
    warning: { main: "#FFB500" },     // Vivid Yellow
    background: {
      default: "#F4F4F4",             // Light Grey
      paper: "#FFFFFF",               // White
    },
  },
});

export default theme;