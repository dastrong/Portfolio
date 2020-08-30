import styled from "styled-components";

export const ContentList = styled.div`
  margin: 25px auto 0;
  width: 100%;
  max-width: 500px;
`;

export const Header = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ContentLink = styled.a`
  width: 100%;
  background-color: ${props => props.theme.colors.background.main};
  border-radius: ${props => props.theme.borderRadius}px;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
`;
