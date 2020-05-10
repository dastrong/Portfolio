import React, { forwardRef } from "react";
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

type GradientProps = {
  customStyles: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  isStatic?: boolean;
  gradientWidth?: string;
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
  ${props => props.theme.centered}

  &:before, &:after {
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
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};
  border-radius: ${props =>
    `calc(${props.theme.borderRadius}px - ${props.gradientWidth})`};
  margin: ${props => props.gradientWidth};

  ${props => props.customStyles};
`;

export default forwardRef(function GradientContainer(
  {
    children,
    isStatic = false,
    containerStyles,
    contentStyles,
    gradientWidth = "2px",
  }: {
    children: React.ReactNode;
    isStatic?: boolean;
    containerStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    contentStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    gradientWidth?: string;
  },
  ref?: React.MutableRefObject<undefined>
) {
  return (
    <Container ref={ref} isStatic={isStatic} customStyles={containerStyles}>
      <Content customStyles={contentStyles} gradientWidth={gradientWidth}>
        {children}
      </Content>
    </Container>
  );
});
