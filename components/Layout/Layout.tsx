import React from "react";
import useHomePageChecker from "hooks/useHomePageChecker";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles, { StyledSection } from "./Layout.styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isHomePage = useHomePageChecker();

  return (
    <>
      <GlobalStyles />

      <Nav />
      <StyledSection isHomePage={isHomePage}>{children}</StyledSection>
      <Footer />
    </>
  );
}
