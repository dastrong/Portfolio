import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.width.md + "px"};
  padding: 20px;
  margin: 20px 0 0;

  ${props => props.theme.media.md} {
    flex-direction: column-reverse;
    padding: 30px 10px 0px;
    margin-top: 144px;
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.main};

  &:last-of-type {
    text-align: right;

    ${props => props.theme.media.md} {
      margin-bottom: 15px;
    }
  }
`;

export const HighlightedTextLink = styled.a`
  display: inline-block;
  text-decoration: underline ${props => props.theme.colors.accent};
`;
