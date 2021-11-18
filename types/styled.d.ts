import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    width: {
      xs: 480;
      sm: 576;
      md: 768;
      lg: 992;
      xl: 1200;
      xxl: 1600;
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
    texture: string;
  }
}
