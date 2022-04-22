import styled, { keyframes } from "styled-components";

const slideThrough = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(100vw);
  }
`;

const Slider = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateX(-100vw);
`;

export const Pink = styled(Slider)`
  background-color: ${props => props.theme.colors.pink};
  animation: ${slideThrough} 650ms 2000ms ease-in-out forwards;
`;
export const Blue = styled(Slider)`
  background-color: ${props => props.theme.colors.blue};
  animation: ${slideThrough} 800ms 2100ms ease-in-out forwards;
`;
export const Bg = styled(Slider)`
  background-color: ${props => props.theme.colors.background.light};
  animation: ${slideThrough} 500ms 2400ms ease-in-out forwards;
`;
