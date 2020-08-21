import styled from "styled-components";
import { dimensions } from "./_variables";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(${1 - dimensions.cornerBox.width * 2}* 100%);
  height: calc(${1 - dimensions.cornerBox.height * 2}* 100%);
`;

export const Headshot = styled.img`
  height: 75%;
  width: auto;
`;

export const NameHeader = styled.h1`
  color: ${props => props.theme.colors.text.light};
  font-size: 3.5rem;
  margin: 1rem 0 0.5rem;
`;

export const JobDescription = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 2rem;
  font-weight: 300;
`;
