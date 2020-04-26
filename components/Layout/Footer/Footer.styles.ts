import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.width.md + "px"};
  padding: 10px;

  ${props => props.theme.media.md} {
    flex-direction: column-reverse;
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.main};

  &:last-of-type {
    text-align: right;
  }
`;

export const HighlightedTextLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  text-decoration: underline ${props => props.theme.colors.accent};
`;
