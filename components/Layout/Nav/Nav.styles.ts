import styled from "styled-components";
import { DropdownMenuProps } from "./Nav";

export const Nav = styled.nav`
  z-index: 1111;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 5px 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: none;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.blue};

  ${props => props.theme.media.md} {
    ${props => props.theme.centered}
  }
`;

export const DesktopMenu = styled.div`
  display: flex;

  ${props => props.theme.media.md} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  ${props => props.theme.media.md} {
    ${props => props.theme.centered}
    flex-direction: column;
  }
`;

export const MobileMenuContainer = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 55px;
  right: 1px;
  z-index: 1111111;
  width: calc(100% - 2px);
  min-width: 310px;
  max-width: 767px;
  transition: all 0.3s;
  transform-origin: top;
  transform: ${props => `rotate3d(${props.isMenuOpen ? 0 : 1}, 0, 0, 90deg)`};
  display: none;

  ${props => props.theme.media.md} {
    display: block;
  }

  svg,
  hr {
    opacity: ${props => (props.isMenuOpen ? 1 : 0)};
    transition-delay: ${props => `${props.isMenuOpen ? 0.3 : 0}s`};
    transition: opacity 1s;
  }

  svg {
    margin-top: 20px;
    height: 100px;
    width: 100%;
  }
`;
