import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: {
      dark: "#000000",
      main: "#070707",
      light: "#161616",
    },
    text: {
      dark: "#E1F1F8",
      main: "#F3F8FA",
      light: "#FFFFFF",
    },
    blue: "#41B6E6",
    pink: "#DB3EB1",
  },
  fontFamily: {
    primary: "'Work Sans', sans-serif",
    secondary: "'Open Sans', sans-serif",
  },
  fontSize: {
    xs: "0.875rem",
    sm: "1.25rem",
    md: "1.75rem",
    lg: "2.25rem",
    xl: "3rem",
  },
  borderRadius: "10px",
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};