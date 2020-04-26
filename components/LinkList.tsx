import React from "react";
import styled from "styled-components";
import InterLink from "components/Shared/Links";
import { internalLinks } from "utils";
import { StyledLinkText } from "./styled/StyledLinkText";

const StyledList = styled.ul`
  ${props => props.theme.centered}
  list-style-type: none;

  ${props => props.theme.media.md} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledListItem = styled.li`
  padding: 15px 10px;
`;

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  width: 60px;
  margin: 5px auto;
  background-color: ${props => props.theme.colors.accent};
  display: none;

  ${props => props.theme.media.md} {
    display: block;
  }
`;

export default function LinkList({ isMenuOpen }: { isMenuOpen?: boolean }) {
  return (
    <StyledList>
      {internalLinks.map(({ text, href }, index) => (
        <>
          <StyledListItem key={text}>
            <InterLink
              href={href}
              StyledAnchor={StyledLinkText}
              isMenuOpen={isMenuOpen}
              index={index}
            >
              {text}
            </InterLink>
          </StyledListItem>

          <StyledDivider />
        </>
      ))}
    </StyledList>
  );
}
