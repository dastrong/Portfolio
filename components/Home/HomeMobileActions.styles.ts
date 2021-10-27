import styled from "styled-components";
import { StyledButton } from "components/Shared/StyledButton";
import EnterAnimationStyles, {
  EnterAnimationTypes,
} from "components/Shared/_css/EnterAnimationStyles";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 350px;
  margin: 4vh auto 1vh;

  a:first-child {
    margin-bottom: 2vh;
  }

  ${props => props.theme.media.md} {
    display: flex;
    width: 325px;
  }

  ${props => props.theme.media.xs} {
    width: 275px;
  }
`;

export const Anchor = styled(StyledButton)<EnterAnimationTypes>`
  font-size: 1.2rem;
  opacity: 0;
  transform: translateX(
    ${props => (props.direction === "toLeft" ? "20px" : "-20px")}
  );
  transition: opacity 200ms, transform 400ms;
  ${EnterAnimationStyles}

  ${props => props.theme.media.md} {
    transition-delay: 600ms;
  }
`;
