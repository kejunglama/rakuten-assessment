import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, roboto, sans-serif",
    h3: {
      fontSize: 30,
    },
    body2: {
      fontSize: 12,
      color: "#696969",
    },
    body1: {
      fontSize: 14,
      color: "#333",
    },
  },
  palette: {
    text: {
      primary: "#BF0000",
    },
  },
});
