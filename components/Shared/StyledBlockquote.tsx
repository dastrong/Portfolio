import styled from "styled-components";
import RemoveBookendStyles from "components/Shared/_css/RemoveBookendStyles";

export const StyledBlockquote = styled.blockquote`
  margin: 1rem 0;
  padding: 0.75rem 0 0.75rem 1rem;
  border-left: 3px solid ${props => props.theme.colors.accent};
  font-size: 0.9rem;

  ${RemoveBookendStyles}
`;
