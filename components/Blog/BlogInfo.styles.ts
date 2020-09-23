import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = css`
  border-radius: 100%;
  border: 2px solid ${props => props.theme.colors.accent};
  height: 45px;
  width: 45px;
  margin: 0;
  margin-right: 1rem;
`;

export const Name = styled.h5`
  font-size: 1.1rem;
`;

export const Date = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
`;
