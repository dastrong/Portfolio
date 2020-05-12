import styled, { createGlobalStyle } from "styled-components";

export const StyledSection = styled.section`
  margin: 55px auto 30px;
  padding: 0 5px;
  width: 90%;
  max-width: ${props => props.theme.width.xxl}px;
  min-height: calc(100vh - 228px - 55px - 30px);

  ${props => props.theme.media.xxl} {
    max-width: ${props => props.theme.width.xl}px;
  }

  ${props => props.theme.media.xl} {
    max-width: ${props => props.theme.width.lg}px;
  }

  ${props => props.theme.media.lg} {
    max-width: ${props => props.theme.width.md}px;
  }

  ${props => props.theme.media.md} {
    min-height: calc(100vh - 375px - 55px - 30px);
  }
`;

export default createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background.light};
    color: ${props => props.theme.colors.text.main};
  }

  body, 
  textarea {
    scrollbar-width: thin;
    scrollbar-color: ${props =>
      `${props.theme.colors.blue} ${props.theme.colors.blue}`};
  }

  body::-webkit-scrollbar, 
  textarea::-webkit-scrollbar  {
    width: 11px;
  }

  body::-webkit-scrollbar-track, 
  textarea::-webkit-scrollbar-track  {
    background: ${props => props.theme.colors.background.main};
  }

  body::-webkit-scrollbar-thumb, 
  textarea::-webkit-scrollbar-thumb  {
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
    font-weight: 400;
  }
`;
