import styled from "styled-components";
import { StyledButton } from "components/Shared/StyledButton";
import EnterAnimationStyles, {
  EnterAnimationTypes,
} from "components/Shared/_css/EnterAnimationStyles";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 275px;
  margin: 1.5rem auto;

  a:first-child {
    margin-bottom: 0.5rem;
  }

  ${props => props.theme.media.md} {
    display: flex;
  }

  ${props => props.theme.media.xs} {
    width: 225px;
  }
`;

export const Anchor = styled(StyledButton)<EnterAnimationTypes>`
  opacity: 0;
  transform: translateX(
    ${props => (props.direction === "toLeft" ? "25px" : "-25px")}
  );
  transition: opacity 400ms, transform 400ms;
  ${EnterAnimationStyles}
`;
