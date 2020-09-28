import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

// numbers are in milliseconds
type OpacityTypes = {
  opacityFrom?: number;
  opacityDuration?: number;
  opacityDelay?: number;
  opacityTiming?: string;
};

// numbers are in milliseconds
type TransformTypes = {
  transformFrom?: number;
  transformFromX?: number;
  transformFromY?: number;
  transformDuration?: number;
  transformDelay?: number;
  transformTiming?: string;
};

type DirectionTypes = {
  toLeft?: boolean;
  toRight?: boolean;
  toUp?: boolean;
  toDown?: boolean;
};

type SettingTypes = OpacityTypes & TransformTypes & DirectionTypes;

type StyledAnimationProps = { inView: boolean } & SettingTypes;

const StyledAnimation = styled.div<StyledAnimationProps>`
  transition: ${props => `
    opacity ${props.opacityDuration}ms ${props.opacityDelay}ms ${props.opacityTiming},
    transform ${props.transformDuration}ms ${props.transformDelay}ms ${props.transformTiming}
  `};

  opacity: ${props => props.opacityFrom};

  transform: ${props => {
    const xDistance = props.transformFrom || props.transformFromX;
    const yDistance = props.transformFrom || props.transformFromY;

    const x = xDistance * (props.toLeft ? 1 : props.toRight ? -1 : 0);
    const y = yDistance * (props.toUp ? 1 : props.toDown ? -1 : 0);

    return `translate(${x}px, ${y}px)`;
  }};

  ${props =>
    props.inView &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `};
`;

const intersectionOptions = {
  triggerOnce: true,
  rootMargin: "55px 0px 0px 0px",
};

export default function AnimateIn({
  children,
  ...settings
}: {
  children: React.ReactNode;
} & SettingTypes) {
  const [ref, inView] = useInView(intersectionOptions);

  return (
    <StyledAnimation ref={ref} inView={inView} {...settings}>
      {children}
    </StyledAnimation>
  );
}

// declare default props here, so we can spread passed ...
//... settings easily to the StyledAnimation component
AnimateIn.defaultProps = {
  opacityFrom: 0,
  opacityDuration: 1000,
  opacityDelay: 0,
  opacityTiming: "ease",
  transformFrom: 0,
  transformFromX: 0,
  transformFromY: 0,
  transformDuration: 1000,
  transformDelay: 0,
  transformTiming: "ease",
  toLeft: false,
  toRight: false,
  toUp: false,
  toDown: false,
};
