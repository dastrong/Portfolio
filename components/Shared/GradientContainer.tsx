import React, { forwardRef } from "react";
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";
import { EnterAnimationTypes } from "./_css/EnterAnimationStyles";

type GradientProps = {
  customStyles: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  isStatic?: boolean;
  gradientWidth?: number;
};

const Effect = css<GradientProps>`
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius}px;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to top right, ${colors.blue}, ${colors.pink})`};
  transform: ${({ isStatic }) =>
    `scale(${isStatic ? 1 : 0}) rotate(${isStatic ? 0 : 1}deg)`};
  transform-origin: ${({ theme: { borderRadius } }) =>
    `calc(100% - ${borderRadius}px) ${borderRadius}px`};
  transition: transform 0.25s ease-in-out;
`;

const Container = styled.div<GradientProps>`
  position: relative;
  display: flex;
  border-radius: ${props => props.theme.borderRadius}px;

  &:before,
  &:after {
    ${Effect}
  }

  &:after {
    transform-origin: ${({ theme: { borderRadius } }) =>
      `${borderRadius}px calc(100% - ${borderRadius}px)`};
  }

  &:hover {
    &:before,
    &:after {
      transform: scale(1) rotate(0deg);
    }
  }

  ${props => props.customStyles};
`;

const Content = styled.div<GradientProps>`
  z-index: 1;
  padding: 10px;
  width: 100%;

  ${({ gradientWidth, theme }) => css`
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.main};
    border-radius: ${theme.borderRadius - gradientWidth}px;
    margin: ${gradientWidth}px;
    box-shadow: 0px 0px ${gradientWidth * 3}px ${theme.colors.accent}33;
  `}

  ${props => props.customStyles};

  ${props => props.theme.media.md} {
    box-shadow: none;
  }
`;

export default forwardRef(function GradientContainer(
  {
    children,
    isStatic = false,
    containerStyles,
    contentStyles,
    gradientWidth = 2,
    ...rest
  }: EnterAnimationTypes & {
    children: React.ReactNode;
    isStatic?: boolean;
    containerStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    contentStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    gradientWidth?: number;
  },
  ref?: (node?: Element) => void | React.MutableRefObject<undefined>
) {
  return (
    <Container
      ref={ref}
      isStatic={isStatic}
      customStyles={containerStyles}
      gradientWidth={gradientWidth}
      {...rest}
    >
      <Content customStyles={contentStyles} gradientWidth={gradientWidth}>
        {children}
      </Content>
    </Container>
  );
});
