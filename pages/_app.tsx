import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, darkColors, lightColors } from "../utils";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
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

      <Footer />

      <style jsx global>{`
        body {
          overflow-x: hidden;
          background-color: ${currentTheme.colors.background.light};
          scrollbar-width: thin;
          scrollbar-color: ${currentTheme.colors.blue}
            ${currentTheme.colors.blue};
        }

        body::-webkit-scrollbar {
          width: 11px;
        }

        body::-webkit-scrollbar-track {
          background: ${currentTheme.colors.background.main};
        }

        body::-webkit-scrollbar-thumb {
          background-color: ${currentTheme.colors.blue};
          border-radius: 6px;
          border: 3px solid ${currentTheme.colors.background.main};
          height: 10px;
          width: 10px;
        }

        body,
        html,
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
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

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fontFamily.primary};
        }

        div,
        p,
        span,
        li,
        a {
          font-family: ${theme.fontFamily.secondary};
        }
      `}</style>
    </ThemeProvider>
  );
}
