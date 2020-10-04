import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";

export type EnterAnimationType = {
  inView?: boolean;
  skipAnimation?: boolean;
};

export type EnterAnimationStyleType = FlattenInterpolation<
  ThemedStyledProps<EnterAnimationType, DefaultTheme>
>;

export default css<{
  inView: boolean;
  skipAnimation: boolean;
}>`
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
