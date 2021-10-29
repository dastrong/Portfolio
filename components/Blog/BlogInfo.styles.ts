import { default as NextImage } from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 100%;
  border: 2px solid ${props => props.theme.colors.accent};
  margin: 0;
  margin-right: 1rem;
  line-height: 0;
`;

export const Image = styled(NextImage)`
  border-radius: 100%;
`;

export const Name = styled.h5`
  font-size: 1.1rem;
`;

export const Date = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.colors.text.dark};
`;
