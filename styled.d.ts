import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    borderRadius: string;
    centered: {
      display: string;
      justifyContent: string;
      alignItems: string;
    };
  }
}
