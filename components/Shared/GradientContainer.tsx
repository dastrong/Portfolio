import React, { forwardRef } from "react";
import styled from "styled-components";

const gradientWidth = "2px";

interface GradientProps {
  isStatic: boolean;
}

const Container = styled.div`
  position: relative;
  ${props => props.theme.centered}

  &:hover > div:first-child,
  &:hover > div:not(last-child) {
    transform: scale(1) rotate(0deg);
  }
`;

const Gradient = styled.div<GradientProps>`
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

  &:first-child {
    transform-origin: ${({ theme: { borderRadius } }) =>
      `${borderRadius}px calc(100% - ${borderRadius}px)`};
  }
`;

const Content = styled.div`
  z-index: 1;
  padding: 10px;
  width: 100%;
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};
  border-radius: ${props =>
    `calc(${props.theme.borderRadius}px - ${gradientWidth})`};
  margin: ${gradientWidth};
`;

type GradientContainerProps = {
  children: React.ReactNode;
  isStatic?: boolean;
};

export default forwardRef(function GradientContainer(
  { children, isStatic = false }: GradientContainerProps,
  ref?: React.MutableRefObject<undefined>
) {
  return (
    <Container ref={ref}>
      {/* we use two containers here for a hover animation that starts in opposite corners and that meets up */}
      {/* if isStatic is passed there is no hover animation and just showcase the 'border' */}
      <Gradient isStatic={isStatic} />
      <Gradient isStatic={isStatic} />

      {/* this box will automatically adjusts according to theme */}
      <Content>{children}</Content>
    </Container>
  );
});
