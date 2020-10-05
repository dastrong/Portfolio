import styled, { css } from "styled-components";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";
import { StyledButton } from "components/Shared/StyledButton";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 25px;
  align-items: center;
  width: 100%;
  min-width: 300px;
  margin: 0 auto;

  ${props => props.theme.media.lg} {
    grid-row-gap: 40px;
    max-width: 750px;
    width: 95%;
  }

  ${props => props.theme.media.md} {
    grid-row-gap: 30px;
  }
`;

export const Image = css`
  background-color: rgba(0, 0, 0, 0);
  border-radius: ${props => props.theme.borderRadius}px;
  height: auto;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / 9;

  ${props => props.theme.media.xl} {
    grid-column: 1 / 8;
  }

  ${props => props.theme.media.lg} {
    grid-row: 1;
    grid-column: 1 / 13;
  }
`;

export const ButtonGroup = styled.div`
  grid-row: 1;
  grid-column: 4 / 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  ${props => props.theme.media.lg} {
    grid-row: 2;
    grid-column: 1 / 13;
  }
`;

export const TextContainer = styled(StyledTextContainer)`
  grid-row: 2;
  grid-column: 9 / 13;

  ${props => props.theme.media.xl} {
    grid-column: 8 / 13;
  }

  ${props => props.theme.media.lg} {
    grid-row: 3;
    grid-column: 1 / 13;
  }
`;

export const Button = styled(StyledButton)`
  flex: 1;
  font-size: 1.3rem;
  padding: 12px;

  ${props => props.theme.media.lg} {
    font-size: 1.2rem;
    padding: 10px;
  }

  ${props => props.theme.media.md} {
    font-size: 1.1rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1rem;
  }

  &:first-child {
    margin-left: 0px !important;
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
    margin-right: 0px !important;
  }
`;

export const TagContainerStyles = css`
  grid-row: 3;
  grid-column: 1/13;

  ${props => props.theme.media.lg} {
    grid-row: 4;
  }
`;
