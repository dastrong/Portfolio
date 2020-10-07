import { css } from "styled-components";

export type EnterAnimationTypes = {
  inView?: boolean;
  skipAnimation?: boolean;
  direction?: string;
};

export default css<EnterAnimationTypes>`
  ${props =>
    props.inView &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `};

  ${props =>
    props.skipAnimation &&
    css`
      transition: all 0s 0s;
    `};
`;
