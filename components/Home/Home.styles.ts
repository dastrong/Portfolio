import { css } from "styled-components";
import { dimensions } from "./_variables";

export const GradientContainerStyles = css`
  width: calc(${dimensions.gradientContainer.width} * 100%);
  height: calc(${dimensions.gradientContainer.height} * 100%);
  margin: auto;
`;

export const ContentStyles = css`
  width: 100%;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
