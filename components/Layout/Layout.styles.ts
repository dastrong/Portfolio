import styled, { createGlobalStyle, css } from "styled-components";

export const StyledSection = styled.section<{ isHomePage: boolean }>`
  overflow: hidden;

  ${props => props.theme.media.xxl} {
    max-width: ${props => props.theme.width.xl}px;
  }

  ${props => props.theme.media.xl} {
    padding: 2.25rem 0.625rem;
    max-width: ${props => props.theme.width.lg}px;
  }

  ${props => props.theme.media.lg} {
    padding: 2rem 0.625rem;
    max-width: ${props => props.theme.width.md}px;
  }

  ${props => props.theme.media.md} {
    padding: 2rem 1.25rem;
    width: 100%;
    min-height: calc(100vh - 375px - 55px);
  }

  ${props => props.theme.media.sm} {
    padding: 30px 0.625rem;
  }

  ${props =>
    props.isHomePage
      ? css`
          margin: 0 auto;
          padding: 0;
          width: 100%;
          max-width: ${props.theme.width.xxl}px;
          height: 100vh;
          display: flex;

          ${props => props.theme.media.md} {
            margin: 55px auto 0;
            padding: 1.25rem 0.625rem 0;
            min-height: calc(100vh - 55px);
            height: 100%;
            display: block;
          }

          @media screen and (min-width: 768px) and (orientation: landscape) and (max-height: 768px) {
            max-width: ${props => props.theme.width.lg}px;
          }
        `
      : css`
          margin: 55px auto 0;
          padding: 2.5rem 0.625rem;
          width: 90%;
          max-width: ${props.theme.width.xxl}px;
          min-height: calc(100vh - 228px - 55px);
        `}
`;

export default createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.background.light};
    color: ${props => props.theme.colors.text.main};
  }

  body, 
  textarea,
  div {
    scrollbar-width: thin;
    scrollbar-color: ${props =>
      `${props.theme.colors.blue} ${props.theme.colors.blue}`};
  }


  
  body::-webkit-scrollbar, 
  textarea::-webkit-scrollbar,
  div::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track, 
  textarea::-webkit-scrollbar-track,
  div::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.main};
  }

  body::-webkit-scrollbar-thumb, 
  textarea::-webkit-scrollbar-thumb,
  div::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.blue};
    border-radius: 6px;
    border: 3px solid ${props => props.theme.colors.background.main};
    height: 10px;
    width: 10px;
  }

  /* styles the thumb horizontally */
  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 5px solid ${props => props.theme.colors.background.main};
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
    font-weight: 500;
  }

  div,
  p,
  span,
  li,
  a,
  button{
    font-family: ${props => props.theme.fontFamily.secondary};
    font-weight: 300;
  }
`;
