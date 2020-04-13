import { DefaultTheme } from "styled-components";

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const darkColors = {
  dark: "#000000",
  main: "#070707",
  light: "#161616",
};

export const lightColors = {
  dark: "#E1F1F8",
  main: "#F3F8FA",
  light: "#FFFFFF",
};

export const theme: DefaultTheme = {
  isDarkTheme: true,
  toggleTheme: () => undefined,
  media: {
    xs: customMediaQuery(480),
    sm: customMediaQuery(576),
    md: customMediaQuery(768),
    lg: customMediaQuery(992),
    xl: customMediaQuery(1200),
    xxl: customMediaQuery(1600),
  },
  colors: {
    background: darkColors,
    text: lightColors,
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
  borderRadius: 10,
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
