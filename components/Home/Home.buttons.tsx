import styled from "styled-components";
import { StyledButton } from "components/Shared/StyledButton";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 111111;

  ${props => props.theme.media.md} {
    flex-direction: column;
    width: 75%;
    margin-inline: auto;
    margin-top: 16px;
    max-width: 200px;
  }
`;

export const Button = styled(StyledButton)`
  font-size: 1.75vw;
  padding: 1.5vh 2.5vw;
  margin-top: 24px;

  &:nth-of-type(even) {
    margin-left: 24px;
  }

  ${props => props.theme.media.lg} {
    font-size: 2.25vw;
  }

  ${props => props.theme.media.md} {
    font-size: 3vw;
    padding: 0.75rem 1.5rem;
    margin-top: 16px;

    &:nth-of-type(even) {
      margin-left: 0px;
    }
  }
`;
