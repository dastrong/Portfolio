import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

type DirectionTypes =
  | { toLeft: boolean }
  | { toRight: boolean }
  | { toUp: boolean }
  | { toDown: boolean };

// have to add the direction type conditionally here because...
// ... styled-components doesn't recognize a union type *shrug*
type StyledAnimationProps = {
  inView: boolean;
  toLeft?: boolean;
  toRight?: boolean;
  toUp?: boolean;
  toDown?: boolean;
};
const StyledAnimation = styled.div<StyledAnimationProps>`
  opacity: 0;
  transition: all 1s;

  ${({ toLeft, toRight, toUp, toDown }) => {
    const xDistance = 30;
    const yDistance = 30;

    const x = xDistance * (toLeft ? 1 : toRight ? -1 : 0);
    const y = yDistance * (toUp ? 1 : toDown ? -1 : 0);

    const transform = `translate(${x}px, ${y}px)`;

    return css`
      transform: ${transform};
    `;
  }}

  ${props =>
    props.inView &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `}
`;

const intersectionOptions = {
  // triggerOnce: true,
  rootMargin: "55px 0px 0px 0px",
};

export default function AnimateIn({
  children,
  ...direction
}: { children: React.ReactNode } & DirectionTypes) {
  const [ref, inView] = useInView(intersectionOptions);

  return (
    <StyledAnimation ref={ref} inView={inView} {...direction}>
      {children}
    </StyledAnimation>
  );
}
