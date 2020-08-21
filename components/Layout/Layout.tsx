import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles, { StyledSection } from "./Layout.styles";

const StyledIndexSection = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { route } = useRouter();
  const isHomePage = route === "/";

  return (
    <>
      <GlobalStyles />

      <Nav isHomePage={isHomePage} />

      {isHomePage ? (
        <StyledIndexSection>{children}</StyledIndexSection>
      ) : (
        <StyledSection>{children}</StyledSection>
      )}

      <Footer isHomePage={isHomePage} />
    </>
  );
}
