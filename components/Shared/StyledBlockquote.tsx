import styled from "styled-components";
import RemoveBookendStyles from "components/Shared/_css/RemoveBookendStyles";

export const StyledBlockquote = styled.blockquote`
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-style: solid;
  border-color: ${props => props.theme.colors.accent};
  border-width: 0px 0px 0px 3px;
  border-radius: ${props => props.theme.borderRadius}px;
  font-size: 0.9rem;
  background-color: ${({ theme: { colors, isDarkTheme } }) =>
    isDarkTheme ? "#272822" : colors.background.main};
  color: ${props => props.theme.colors.text.main};
  box-shadow: 0px 0px 6px ${props => props.theme.colors.accent}1a;

  ${RemoveBookendStyles}
`;
