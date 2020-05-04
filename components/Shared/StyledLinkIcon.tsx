import styled from "styled-components";

export const StyledLinkIcon = styled.a<{ href: string }>`
  display: flex;
  color: ${props => props.theme.colors.text.light};
  opacity: ${props => (props.theme.isDarkTheme ? 0.9 : 0.82)};
  transition-duration: 0.25s;
  transition-property: opacity;

  &:hover {
    opacity: 1;
  }
`;
