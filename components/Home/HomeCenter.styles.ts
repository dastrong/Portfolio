import styled, { css } from "styled-components";
import { dimensions } from "./_variables";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(${1 - dimensions.cornerBox.width * 2}* 100%);
  height: calc(${1 - dimensions.cornerBox.height * 2}* 100%);

  ${props => props.theme.media.sm} {
    width: 100%;
  }
`;

export const Headshot = css`
  max-width: 275px;
`;

export const NameHeader = styled.h1`
  color: ${props => props.theme.colors.text.light};
  font-size: 3.5rem;
  margin: 1rem 0 0.5rem;
  text-align: center;

  ${props => props.theme.media.sm} {
    font-size: 3.2rem;
    margin: 1rem 0 0.25rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.9rem;
  }
`;

export const JobDescription = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 2rem;
  text-align: center;

  ${props => props.theme.media.sm} {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.9rem;
  }
`;
