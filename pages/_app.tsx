import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, darkColors, lightColors } from "../utils";
import NavBar from "../components/NavBar";
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
    },
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <NavBar />

      <Component {...pageProps} />

      <style jsx global>{`
        body,
        html {
          background-color: ${currentTheme.colors.background.light};
        }

        body,
        html,
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: ${theme.fontFamily.primary};
          transition: all 0.15s;
        }

        // removes the outline on clicks; keeps it for keyboard events
        *:focus:not(.focus-visible) {
          outline: none;
        }

        a {
          color: inherit;
          text-decoration: none;
          display: inherit;
        }

        div,
        p,
        span {
          font-family: ${theme.fontFamily.secondary};
        }
      `}</style>
    </ThemeProvider>
  );
}
