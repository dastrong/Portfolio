import styled from "styled-components";
import EnterAnimationStyles from "components/Shared/_css/EnterAnimationStyles";
import { StyledParagraph } from "components/Shared/StyledParagraph";

export const Container = styled.div`
  margin: 3rem auto 1rem;
  text-align: center;
  max-width: min(400px, 80%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 8rem;
  margin: 0 auto 0.5rem;

  transform: translateY(-20px);
  opacity: 0;
  transition: opacity 500ms 250ms, transform 500ms 250ms;
  ${EnterAnimationStyles}
`;

export const Paragraph = styled(StyledParagraph)`
  font-size: ${props => props.theme.fontSize.xs};

  opacity: 0;
  transform: translateY(10px);
  transition: opacity 300ms 450ms, transform 300ms 450ms;
  ${EnterAnimationStyles}
`;
