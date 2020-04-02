import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />

    <style jsx global>{`
      body,
      html,
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.fontFamily.primary};
      }

      div,
      p,
      span {
        font-family: ${theme.fontFamily.secondary};
      }
    `}</style>
  </ThemeProvider>
);

export default App;
