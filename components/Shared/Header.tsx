import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 45px;

  ${props => props.theme.media.xl} {
    margin-bottom: 40px;
  }

  ${props => props.theme.media.lg} {
    margin-bottom: 35px;
  }
`;

const StyledText = styled.h1`
  user-select: none;
  position: relative;
  font-size: 4rem;
  width: 100%;
  min-width: min-content;
  max-width: max-content;
  color: ${props => props.theme.colors.text.main};
  text-align: center;
  padding: 0 1ch;
  margin: 0 auto;
  text-shadow: 0px 0.125px 0.5px ${props => props.theme.colors.background.dark},
    0.1px 0.3px 1px ${props => props.theme.colors.background.main},
    0.2px 0.5px 2px ${props => props.theme.colors.background.light};

  span {
    color: ${props => props.theme.colors.accent};
    font-family: inherit;
  }

  ${props => props.theme.media.xl} {
    font-size: 3.75rem;
  }

  ${props => props.theme.media.lg} {
    font-size: 3.5rem;
  }

  ${props => props.theme.media.md} {
    font-size: 3rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 2.75rem;
  }

  ${props => props.theme.media.xs} {
    font-size: 2.5rem;
  }
`;

const StyledLine = styled.hr`
  height: 0.3em;
  width: calc(100% + 2ch);
  border: none;
  opacity: 0.7;
  background: ${props =>
    `linear-gradient(to bottom right, ${props.theme.colors.blue}, ${props.theme.colors.pink})`};
  position: relative;
  bottom: 0.33em;
  margin-left: -1ch;
  margin-bottom: -0.3em;
  z-index: -1;

  &:after,
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0;
    width: 0;
  }

  &:after {
    left: 0;
    border-top: 0.3em solid ${props => props.theme.colors.background.light};
    border-right: 0.6em solid transparent;
  }

  &:before {
    right: 0;
    border-bottom: 0.3em solid ${props => props.theme.colors.background.light};
    border-left: 0.6em solid transparent;
  }
`;

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <StyledHeader>
      <StyledText>
        {children}
        <StyledLine />
      </StyledText>
    </StyledHeader>
  );
}
