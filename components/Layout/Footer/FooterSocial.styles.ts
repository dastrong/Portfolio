import styled, { css } from "styled-components";
import { StyledLinkIcon } from "components/Shared/StyledLinkIcon";

export const SocialContainer = css`
  position: absolute;
  bottom: 32px;

  ${props => props.theme.media.md} {
    top: 140px;
    left: calc(50% - 65px);
    height: 134px;
  }
`;

export const ContentContainer = css`
  display: flex;

  ${props => props.theme.media.md} {
    flex-direction: column;
  }
`;

export const SocialIcon = styled(StyledLinkIcon)`
  margin: 0px 5px;

  &:first-of-type {
    margin-left: 0px;
  }

  &:last-of-type {
    margin-right: 0px;
  }

  ${props => props.theme.media.md} {
    margin: 5px 0px;

    &:first-of-type {
      margin-top: 0px;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;
