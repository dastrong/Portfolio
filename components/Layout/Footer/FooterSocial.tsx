import React from "react";
import styled from "styled-components";
import { externalLinks } from "utils";
import { StyledLinkIcon } from "components/Shared/StyledLinkIcon";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;

  a {
    margin: 0px 5px;

    &:first-of-type {
      margin-left: 0px;
    }

    &:last-of-type {
      margin-right: 0px;
    }
  }

  ${props => props.theme.media.md} {
    flex-direction: column;

    a {
      margin: 5px 0;

      &:first-of-type {
        margin-left: 0px;
        margin-top: 0px;
      }

      &:last-of-type {
        margin-right: 0px;
        margin-bottom: 0px;
      }
    }
  }
`;

export default function LinkSocial() {
  return (
    <StyledContainer>
      {externalLinks.map(({ Icon, href }) => (
        <StyledLinkIcon key={href} href={href} target="_blank" rel="noopener">
          <Icon size="30" />
        </StyledLinkIcon>
      ))}
    </StyledContainer>
  );
}
