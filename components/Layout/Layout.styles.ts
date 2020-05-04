import styled, { createGlobalStyle } from "styled-components";

export const StyledSection = styled.section`
  margin-top: 55px;
`;

export default createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background.light};
    color: ${props => props.theme.colors.text.main};
    scrollbar-width: thin;
    scrollbar-color: ${props =>
      `${props.theme.colors.blue} ${props.theme.colors.blue}`};
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.main};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.blue};
    border-radius: 6px;
    border: 3px solid ${props => props.theme.colors.background.main};
    height: 10px;
    width: 10px;
  }

  body,
  html,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* removes the outline on clicks; keeps it for keyboard events */
  *:focus:not(.focus-visible) {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fontFamily.primary};
  }

  div,
  p,
  span,
  li,
  a {
    font-family: ${props => props.theme.fontFamily.secondary};
  }
`;
