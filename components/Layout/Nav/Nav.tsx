import React, { useState, useRef } from "react";
import { useTheme } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

import useOnClickOutside from "hooks/useOnClickOutside";

import GradientContainer from "components/Shared/GradientContainer";
import ThemeToggle from "./ThemeToggle";
import NavList from "./NavList";
import NavLogoMain from "./NavLogoMain";
import NavLogoMobile from "./NavLogoMobile";
import * as Styled from "./Nav.styles";

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
          <NavList isMenuOpen />
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

      <Styled.MobileMenu isMenuOpen={isMenuOpen}>
        <GradientContainer isStatic ref={refMobileMenu}>
          <NavList isMobile isMenuOpen={isMenuOpen} />
          <NavLogoMobile />
        </GradientContainer>
      </Styled.MobileMenu>
    </Styled.Nav>
  );
}
