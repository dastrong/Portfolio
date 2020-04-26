import React from "react";
import FooterSocial from "./FooterSocial";
import GradientContainer from "components/Shared/GradientContainer";
import LogoFooter from "./FooterIcon";
import * as Styled from "./Footer.styles";

export default function Footer() {
  return (
    <Styled.Container>
      <LogoFooter />

      <Styled.Bottom>
        <Styled.Text>&copy; 2020 All Rights Reserved</Styled.Text>

        <GradientContainer isStatic>
          <FooterSocial />
        </GradientContainer>

        <Styled.Text>
          Designed by:{" "}
          <Styled.HighlightedTextLink
            href="https://www.danielstrong.tech"
            target="_blank"
            rel="noopener"
          >
            Daniel Strong
          </Styled.HighlightedTextLink>
        </Styled.Text>
      </Styled.Bottom>
    </Styled.Container>
  );
}
