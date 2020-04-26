import React, { useState, useRef } from "react";
import { useTheme } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

import useOnClickOutside from "hooks/useOnClickOutside";

import GradientContainer from "components/Shared/GradientContainer";
import LinkList from "components/LinkList";
import ThemeToggle from "./ThemeToggle";
import NavLogoMain from "./NavLogoMain";
import NavLogoMobile from "./NavLogoMobile";
import * as Styled from "./Nav.styles";

export type DropdownMenuProps = {
  isMenuOpen: boolean;
};

export default function Nav() {
  const { colors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const refMobileMenu = useRef();
  const refNavIcons = useRef();

  useOnClickOutside(refMobileMenu, () => setIsMenuOpen(false), refNavIcons);

  const toggleMenu = () => setIsMenuOpen(state => !state);

  return (
    <Styled.Nav>
      <NavLogoMain />

      <Styled.Container ref={refNavIcons}>
        <Styled.DesktopMenu>
          <LinkList isMenuOpen />
        </Styled.DesktopMenu>

        <ThemeToggle />

        <Styled.MenuButton
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
        </Styled.MenuButton>
      </Styled.Container>

      <Styled.MobileMenuContainer ref={refMobileMenu} isMenuOpen={isMenuOpen}>
        <GradientContainer isStatic>
          <Styled.MobileMenu>
            <LinkList isMenuOpen={isMenuOpen} />
            <NavLogoMobile />
          </Styled.MobileMenu>
        </GradientContainer>
      </Styled.MobileMenuContainer>
    </Styled.Nav>
  );
}
