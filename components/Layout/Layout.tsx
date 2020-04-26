import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "./Layout.styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />

      <Nav />
      {children}
      <Footer />
    </>
  );
}
