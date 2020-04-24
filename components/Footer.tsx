import React from "react";
import styled from "styled-components";
import { LogoFooter } from "components/_svgs";
import LinkSocial from "components/LinkSocial";
import GradientContainer from "components/GradientContainer";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.width.md + "px"};
  padding: 10px;
`;

const StyledText = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.main};

  &:last-of-type {
    text-align: right;
  }
`;

const HighlightedLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  text-decoration: underline ${props => props.theme.colors.accent};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <LogoFooter />

      <StyledBottom>
        <StyledText>&copy; 2020 All Rights Reserved</StyledText>

        <GradientContainer isStatic>
          <LinkSocial />
        </GradientContainer>

        <StyledText>
          Designed by:{" "}
          <HighlightedLink
            href="https://www.danielstrong.tech"
            target="_blank"
            rel="noopener"
          >
            Daniel Strong
          </HighlightedLink>
        </StyledText>
      </StyledBottom>
    </StyledFooter>
  );
}
