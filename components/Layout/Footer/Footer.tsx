import React from "react";
import styled from "styled-components";
import FooterIcon from "./FooterIcon";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterSub from "./FooterSub";

export const StyledContainer = styled.footer`
  width: 100%;
  padding: 30px;
  background-color: ${props => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default function Footer() {
  return (
    <StyledContainer>
      <FooterIcon />
      <FooterLinks />
      <FooterSocial />
      <FooterSub />
    </StyledContainer>
  );
}
