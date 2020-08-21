import React from "react";
import styled from "styled-components";
import FooterIcon from "./FooterIcon";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterSub from "./FooterSub";
import { LayoutTypes } from "../LayoutTypes";

export const StyledContainer = styled.footer<LayoutTypes>`
  width: 100%;
  padding: 30px;
  background-color: ${props => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  display: ${props => (props.isHomePage ? "none" : "flex")};
`;

export default function Footer({ isHomePage }: LayoutTypes) {
  return (
    <StyledContainer isHomePage={isHomePage}>
      <FooterIcon />
      <FooterLinks />
      <FooterSocial />
      <FooterSub />
    </StyledContainer>
  );
}
