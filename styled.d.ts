import "styled-components";
// import {} from "styled-components/cssprop";

declare module "styled-components" {
  export interface DefaultTheme {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    width: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    colors: {
      background: {
        dark: string;
        main: string;
        light: string;
      };
      text: {
        dark: string;
        main: string;
        light: string;
      };
      blue: string;
      pink: string;
      accent: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: number;
    centered: {
      display: string;
      justifyContent: string;
      alignItems: string;
    };
  }
}
