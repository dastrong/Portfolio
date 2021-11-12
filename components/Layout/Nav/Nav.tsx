import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

import useOnClickOutside from "hooks/useOnClickOutside";
import useHomePageChecker from "hooks/useHomePageChecker";

import GradientContainer from "components/Shared/GradientContainer";
import ThemeToggle from "./ThemeToggle";
import NavList from "./NavList";
import NavLogoMain from "./NavLogoMain";
const NavLogoMobile = dynamic(() => import("./NavLogoMobile"));
import * as Styled from "./Nav.styles";

const iconSize = 22;

export default function Nav() {
  const { pathname } = useRouter();
  const { colors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = useHomePageChecker();

  const refMobileMenu = useRef();
  const refNavIcons = useRef();

  useOnClickOutside(refMobileMenu, () => setIsMenuOpen(false), refNavIcons);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(state => !state);

  return (
    <Styled.Nav isHomePage={isHomePage}>
      <Styled.NavContent>
        <NavLogoMain />

        <Styled.Container ref={refNavIcons}>
          <Styled.DesktopMenu>
            <NavList isMenuOpen />
          </Styled.DesktopMenu>

          <ThemeToggle iconSize={iconSize} />

          <Styled.MenuButton
            onClick={toggleMenu}
            onKeyPress={e => {
              if (![" ", "Enter"].includes(e.key)) return;
              toggleMenu();
            }}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <FaTimes size={iconSize} color={colors.pink} />
            ) : (
              <FaBars size={iconSize} color={colors.blue} />
            )}
          </Styled.MenuButton>
        </Styled.Container>

        <Styled.MobileMenu isMenuOpen={isMenuOpen}>
          <GradientContainer isStatic ref={refMobileMenu}>
            <NavList isMobile isMenuOpen={isMenuOpen} />
            <NavLogoMobile />
          </GradientContainer>
        </Styled.MobileMenu>
      </Styled.NavContent>
    </Styled.Nav>
  );
}
