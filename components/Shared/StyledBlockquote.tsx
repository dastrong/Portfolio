import styled from "styled-components";
import RemoveBookendStyles from "components/Shared/_css/RemoveBookendStyles";

export const StyledBlockquote = styled.blockquote`
  border-left: 4px solid ${props => props.theme.colors.accent};
  padding: 5px 10px 5px 15px;
  font-size: 0.9em;

  ${RemoveBookendStyles}

  * {
    margin: 10px 0;
  }
`;
