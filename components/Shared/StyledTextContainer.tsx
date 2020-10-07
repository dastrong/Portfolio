import styled from "styled-components";
import RemoveBookendStyles from "./_css/RemoveBookendStyles";

export const StyledTextContainer = styled.div`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.dark};
  min-width: 300px;
  width: 100%;

  ${RemoveBookendStyles}

  ${props => props.theme.media.xxl} {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  ${props => props.theme.media.xl} {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  ${props => props.theme.media.sm} {
    line-height: 1.5;
    font-size: 1rem;
  }
`;
