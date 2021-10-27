import { css } from "styled-components";

export const GradientContainerStyles = css`
  margin: auto;
  width: calc(100vw - max(5vh, 3vw));
  height: calc(100vh - max(5vh, 3vw));
  max-width: ${props => props.theme.width.xl}px;
  max-height: ${props => props.theme.width.xl}px;

  ${props => props.theme.media.xl} {
    width: 100%;
    height: 100%;
  }

  /* hides the gradient outline on mobile sizes */
  ${props => props.theme.media.md} {
    &:after,
    &:before {
      opacity: 0;
    }
  }
`;

export const ContentStyles = css`
  width: 100%;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* need to reset the background color to light since ...
   the gradient container should be invisible on mobile */
  ${props => props.theme.media.md} {
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.background.light};
  }
`;
