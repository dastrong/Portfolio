import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: flex;
  position: relative;
  > * {
    position: absolute;
  }
`;

export default function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Container
      tabIndex={0}
      role="button"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      onKeyDown={e => {
        if (![13, 32].includes(e.keyCode)) return;
        toggleTheme();
      }}
    >
      <FaSun color="#fcff50" size="20" opacity={isDarkTheme ? "1" : "0"} />
      <FaMoon color="#a9a9a9" size="20" opacity={isDarkTheme ? "0" : "1"} />
    </Container>
  );
}
