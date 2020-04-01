import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {};

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
