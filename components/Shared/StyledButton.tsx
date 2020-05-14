import styled from "styled-components";
import ButtonStyles from "./_css/ButtonStyles";

export const StyledButton = styled.a`
  ${ButtonStyles}

  font-size: 0.9rem;
  line-height: 1.3rem;

  ${props => props.theme.media.md} {
    font-size: 0.75rem;
    line-height: 1.1rem;
  }
`;
