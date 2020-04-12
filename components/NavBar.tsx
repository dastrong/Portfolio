import React from "react";
import styled, { useTheme } from "styled-components";
import { MdMenu } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { LogoNav } from "./_svgs";

const Nav = styled.nav`
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
  > * {
    margin: 0 4px 0 12px;
  }
`;

export default function NavBar() {
  const { colors } = useTheme();

  return (
    <Nav>
      <LogoNav />
      <Icons>
        <ThemeToggle />
        <MdMenu color={colors.blue} size="30" />
      </Icons>
    </Nav>
  );
}
