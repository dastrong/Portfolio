import React from "react";
import { useRouter } from "next/router";
import useAckee from "use-ackee";

import useHomePageChecker from "hooks/useHomePageChecker";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles, { StyledSection } from "./Layout.styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { asPath } = useRouter();
  const isHomePage = useHomePageChecker();

  useAckee(asPath, {
    server: process.env.NEXT_PUBLIC_ANALYTICS_SERVER_URL,
    domainId: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN_ID,
  });

  return (
    <>
      <GlobalStyles />

      <Nav />
      <StyledSection isHomePage={isHomePage}>{children}</StyledSection>
      <Footer />
    </>
  );
}
