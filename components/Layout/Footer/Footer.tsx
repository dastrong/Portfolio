import React from "react";
import styled from "styled-components";

import useHomePageChecker from "hooks/useHomePageChecker";
import FooterIcon from "./FooterIcon";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterSub from "./FooterSub";

export const StyledContainer = styled.footer<{ isHomePage: boolean }>`
  width: 100%;
  padding: 30px;
  background-color: ${props => props.theme.colors.background.main};
  display: ${props => (props.isHomePage ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default function Footer() {
  const isHomePage = useHomePageChecker();

  return (
    <StyledContainer isHomePage={isHomePage}>
      <FooterIcon />
      <FooterLinks />
      <FooterSocial />
      <FooterSub />
    </StyledContainer>
  );
}
