import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, darkColors, lightColors, textures } from "utils/theme";
import Layout from "components/Layout";
import "focus-visible";

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
    texture: isDarkTheme ? textures.dark : textures.light,
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
