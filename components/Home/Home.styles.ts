import { css } from "styled-components";
import { dimensions } from "./_variables";

export const GradientContainerStyles = css`
  width: calc(${dimensions.gradientContainer.width} * 100%);
  height: calc(${dimensions.gradientContainer.height} * 100%);
  margin: auto;

  /* hides the gradient outline on mobile sizes */
  ${props => props.theme.media.sm} {
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

  /* need to reset the background color to light since ...
   the gradient container should be invisible on mobile */
  ${props => props.theme.media.sm} {
    justify-content: space-around;
    width: 95%;
    max-width: 400px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.background.light};
  }
`;
