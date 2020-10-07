import styled from "styled-components";
import RemoveBookendStyles from "./_css/RemoveBookendStyles";

export const StyledTextContainer = styled.div`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.dark};
  min-width: 300px;
  width: 100%;

  ${RemoveBookendStyles}

  ${props => props.theme.media.xxl} {
    font-size: 1.2rem;
  }

  ${props => props.theme.media.xl} {
    font-size: 1.1rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1rem;
  }
`;
