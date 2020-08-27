import styled from "styled-components";

export const Nav = styled.nav<{ isHomePage: boolean }>`
  z-index: 1111;
  height: 55px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.main};
  position: fixed;
  top: 0;
  transition-duration: ${props => (props.isHomePage ? 0 : "0.2s")};
  transition-property: transform;
  transform: translateY(${props => (props.isHomePage ? "-100%" : 0)});

  ${props => props.theme.media.sm} {
    transform: translateY(0);
  }
`;

export const NavContent = styled.div`
  height: 55px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.width.lg}px;
  margin: 0 auto;
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

export const MobileMenu = styled.div<{ isMenuOpen: boolean }>`
  min-height: calc(100vh - 55px);
  position: absolute;
  top: 55px;
  right: 0px;
  z-index: 1111111;
  width: 100%;
  min-width: 300px;
  max-width: 767px;
  background-color: ${props =>
    `rgba(122,122,122, ${props.isMenuOpen ? 0.4 : 0})`};
  transform-origin: top;
  transform: ${props => `rotate3d(${props.isMenuOpen ? 0 : 1}, 0, 0, 90deg)`};
  transition: ${props =>
    `transform 0.3s 0s, ${
      props.isMenuOpen ? "0.2s 0.2s" : "0s 0s"
    } background-color`};
  display: none;

  ${props => props.theme.media.md} {
    display: block;
  }

  /* these styles apply to the NavLogoMobile  */
  svg {
    opacity: ${props => (props.isMenuOpen ? 1 : 0)};
    transition: opacity ${props => `${props.isMenuOpen ? 0.4 : 0}s`};
    transition-delay: ${props => `${props.isMenuOpen ? 0.5 : 0}s`};
    transition-timing-function: cubic-bezier(0.57, 0.11, 0.87, 1);
  }

  /* removes the rounded edges from the gradient container */
  > div:before,
  > div:after,
  > div,
  > div > div {
    border-radius: 0px;
  }
`;
