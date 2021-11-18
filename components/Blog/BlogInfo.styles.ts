import styled from "styled-components";

export const Container = styled.div`
  margin-top: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.background.main};
  border-radius: 100%;
  border: 2px solid ${props => props.theme.colors.accent};
  margin: 0;
  margin-right: 1rem;
  line-height: 0;
  height: 45px;
  width: 45px;
  display: block;
  position: relative;
  box-sizing: content-box;

  * {
    border-radius: inherit;
  }
`;

export const Name = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamily.primary};
`;

export const Date = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.colors.text.dark};
`;
