import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

import GradientContainer from "components/GradientContainer";
import ThemeToggle from "components/ThemeToggle";
import LinkList from "components/LinkList";
import { LogoNav, LogoBig } from "components/_svgs";
import useOnClickOutside from "hooks/useOnClickOutside";

type DropdownMenuProps = {
  isMenuOpen: boolean;
};

const StyledNav = styled.nav`
  z-index: 1111;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 5px 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenuButton = styled.button`
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

const DesktopMenu = styled.div`
  display: flex;

  ${props => props.theme.media.md} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  ${props => props.theme.media.md} {
    ${props => props.theme.centered}
    flex-direction: column;
  }
`;

const DropdownMenu = styled.div<DropdownMenuProps>`
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

export default function NavBar() {
  const { colors } = useTheme();
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const toggleMenu = () => setIsMenuOpen(state => !state);

  useEffect(() => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <StyledNav>
      <LogoNav />

      <Icons>
        <DesktopMenu>
          <LinkList isMenuOpen />
        </DesktopMenu>

        <ThemeToggle />

        <StyledMenuButton
          onClick={toggleMenu}
          onKeyPress={e => {
            if (![13, 32].includes(e.keyCode)) return;
            toggleMenu();
          }}
        >
          {isMenuOpen ? (
            <FaTimes size="20" color={colors.pink} />
          ) : (
            <FaBars size="20" color={colors.blue} />
          )}
        </StyledMenuButton>
      </Icons>

      <DropdownMenu ref={ref} isMenuOpen={isMenuOpen}>
        <GradientContainer isStatic>
          <MobileMenu>
            <LinkList isMenuOpen={isMenuOpen} />
            <LogoBig />
          </MobileMenu>
        </GradientContainer>
      </DropdownMenu>
    </StyledNav>
  );
}
