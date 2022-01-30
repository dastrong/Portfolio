import styled, { keyframes } from "styled-components";

const Text = styled.div`
  margin: auto;
  position: absolute;
  opacity: 0;
  font-size: 7vw;
  padding: 1rem;

  @media (orientation: portrait) {
    font-size: 6vh;
  }

  ${props => props.theme.media.md} {
    text-align: center;
  }
`;

const textAnimation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledGreeting = styled(Text)`
  animation: ${textAnimation} 2500ms 0ms 1 forwards;
`;
export const StyledDescription = styled(Text)`
  animation: ${textAnimation} 3000ms 2500ms 1 forwards;
`;
export const StyledBasics = styled(Text)`
  animation: ${textAnimation} 4000ms 7000ms 1 forwards;
`;
export const StyledStyling = styled(Text)`
  animation: ${textAnimation} 5000ms 14000ms 1 forwards;
`;
export const StyledLibraries = styled(Text)`
  animation: ${textAnimation} 4000ms 22000ms 1 forwards;
`;
export const StyledExtras = styled(Text)`
  animation: ${textAnimation} 4000ms 29000ms 1 forwards;
`;

const finals = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const StyledFinals = styled(Text)`
  animation: ${finals} 3000ms 36000ms 1 forwards;
`;
