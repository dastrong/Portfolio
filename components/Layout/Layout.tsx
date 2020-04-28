import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles, { StyledSection } from "./Layout.styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />

      <Nav />
      <StyledSection>{children}</StyledSection>
      <Footer />
    </>
  );
}
