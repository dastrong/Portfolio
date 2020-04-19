import React from "react";
import styled from "styled-components";
import { LogoBig } from "components/_svgs";
import LinkSocial from "components/LinkSocial";
import GradientContainer from "components/GradientContainer";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;

  > a > svg {
    height: 150px;
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const StyledText = styled.p`
  font-size: 0.8rem;
  width: 33%;
  color: ${props => props.theme.colors.text.main};

  &:last-of-type {
    text-align: right;
  }
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <LogoBig />

      <StyledBottom>
        <StyledText>Copyright 2020 &copy; All Right Reserved</StyledText>

        <GradientContainer isStatic>
          <LinkSocial />
        </GradientContainer>

        <StyledText>
          Designed by: <HighlightedText>Daniel Strong</HighlightedText>
        </StyledText>
      </StyledBottom>
    </StyledFooter>
  );
}
