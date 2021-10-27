import styled from "styled-components";
import EnterAnimationStyles, {
  EnterAnimationTypes,
} from "components/Shared/_css/EnterAnimationStyles";
import { dimensions } from "./_variables";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(${1 - dimensions.cornerBox.width * 2}* 100%);

  ${props => props.theme.media.md} {
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 95%;
  max-height: 65vh;

  ${props => props.theme.media.md} {
    width: 85%;
  }

  @media screen and (min-width: 1024px) and (orientation: portrait) {
    max-width: 600px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) and (max-height: 600px) {
    max-width: 250px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) and (min-height: 601px) {
    max-width: 300px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) and (min-height: 751px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) and (min-height: 875px) {
    max-width: 425px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) and (min-height: 950px) {
    max-width: 475px;
  }
`;

export const TextAndActionsContainer = styled.div`
  margin-top: 0vh;
  background: none;
  z-index: 1;

  ${props => props.theme.media.md} {
    margin-top: -4vh;
    background: linear-gradient(0deg, #161616, #1616163b 90%, transparent 100%);
  }
`;

export const NameHeader = styled.h1<EnterAnimationTypes>`
  color: ${props => props.theme.colors.text.light};
  font-size: 4rem;
  margin: 1rem 0 0.5rem;
  line-height: 1;
  text-align: center;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 400ms, transform 400ms;

  ${EnterAnimationStyles}

  ${props => props.theme.media.lg} {
    font-size: 3.4rem;
  }

  ${props => props.theme.media.md} {
    margin: 6vh 0 1.5vh;
  }

  ${props => props.theme.media.sm} {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.7rem;
  }
`;

export const JobDescription = styled.p<EnterAnimationTypes>`
  color: ${props => props.theme.colors.text.dark};
  font-size: 2.6rem;
  line-height: 1;
  text-align: center;

  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 400ms 200ms, transform 800ms 100ms;

  ${EnterAnimationStyles}

  ${props => props.theme.media.lg} {
    font-size: 2.3rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 2.1rem;
    margin: 0;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.9rem;
  }
`;
