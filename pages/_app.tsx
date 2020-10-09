import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, darkColors, lightColors } from "../utils";
import Layout from "components/Layout";
import "focus-visible";
import "intersection-observer";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setTheme] = useState(true);

  const toggleTheme = () => setTheme(state => !state);

  const currentTheme = {
    ...theme,
    isDarkTheme,
    toggleTheme,
    colors: {
      ...theme.colors,
      background: isDarkTheme ? darkColors : lightColors,
      text: isDarkTheme ? lightColors : darkColors,
      accent: isDarkTheme ? theme.colors.pink : theme.colors.blue,
    },
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
