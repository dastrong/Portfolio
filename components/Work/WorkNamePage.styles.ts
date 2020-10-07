import styled, { css } from "styled-components";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";
import { StyledButton } from "components/Shared/StyledButton";
import EnterAnimationStyles, {
  EnterAnimationTypes,
} from "components/Shared/_css/EnterAnimationStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Image = css`
  background-color: rgba(0, 0, 0, 0);
  border-radius: ${props => props.theme.borderRadius}px;
  height: auto;
  width: 100%;
  margin-bottom: 2rem;

  ${props => props.theme.media.sm} {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 2rem;
  width: 90%;

  ${props => props.theme.media.sm} {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const TextContainer = styled(StyledTextContainer)`
  margin: 0 auto 2rem;
  width: 80%;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 400ms 200ms, transform 400ms 200ms;

  ${EnterAnimationStyles}

  ${props => props.theme.media.sm} {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled(StyledButton)<EnterAnimationTypes>`
  flex: 1;
  font-size: 1.3rem;
  padding: 0.8rem;

  opacity: 0;
  transform: translateX(
    ${props => (props.direction === "toLeft" ? "50px" : "-50px")}
  );
  transition: transform 500ms, opacity 500ms;

  ${EnterAnimationStyles}

  ${props => props.theme.media.lg} {
    font-size: 1.2rem;
    padding: 0.6rem;
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
  width: 70%;

  ${props => props.theme.media.sm} {
    width: 100%;
  }
`;
