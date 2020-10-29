import styled, { css } from "styled-components";
import { dimensions } from "./_variables";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(${1 - dimensions.cornerBox.width * 2}* 100%);
  height: calc(${1 - dimensions.cornerBox.height * 2}* 100%);

  ${props => props.theme.media.md} {
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
`;

export const Headshot = css`
  max-width: 275px;
  background-color: inherit;
`;

export const NameHeader = styled.h1`
  color: ${props => props.theme.colors.text.light};
  font-size: 4rem;
  margin: 1rem 0 0.5rem;
  line-height: 1;
  text-align: center;

  ${props => props.theme.media.lg} {
    font-size: 3.4rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.7rem;
  }
`;

export const JobDescription = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 2.6rem;
  line-height: 1;
  text-align: center;

  ${props => props.theme.media.lg} {
    font-size: 2.3rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.9rem;
  }
`;
