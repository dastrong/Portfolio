import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styled, { useTheme } from "styled-components";

const Container = styled.div<{ iconSize: number }>`
  height: ${props => props.iconSize}px;
  width: ${props => props.iconSize}px;
  cursor: pointer;
  display: flex;
  position: relative;
  margin: 0 15px;

  > * {
    position: absolute;
  }
`;

export default function ThemeToggle({ iconSize }: { iconSize: number }) {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Container
      iconSize={iconSize}
      tabIndex={0}
      role="button"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      onKeyPress={e => {
        if (![" ", "Enter"].includes(e.key)) return;
        toggleTheme();
      }}
    >
      <FaSun color="#fcff50" size={iconSize} opacity={isDarkTheme ? 1 : 0} />
      <FaMoon color="#a9a9a9" size={iconSize} opacity={isDarkTheme ? 0 : 1} />
    </Container>
  );
}
