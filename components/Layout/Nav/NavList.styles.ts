import styled from "styled-components";

export const List = styled.ul`
  ${props => props.theme.centered}
  list-style-type: none;

  ${props => props.theme.media.md} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  padding: 15px 10px;
`;

export const Divider = styled.hr<{ index: number; isMenuOpen: boolean }>`
  border: none;
  height: 1px;
  width: 60px;
  margin: 20px auto -10px;
  background-color: ${props => props.theme.colors.accent};

  ${props => props.theme.media.md} {
    opacity: ${props => (props.isMenuOpen ? 1 : 0)};
    transition-duration: ${props => `${props.isMenuOpen ? 0.1 : 0}s`};
    transition-delay: ${props =>
      `${props.isMenuOpen ? props.index * 0.1 + 0.2 : 0}s`};
    transition-property: opacity;
  }
`;
