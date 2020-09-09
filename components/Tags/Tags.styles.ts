import styled from "styled-components";

export const ContentList = styled.div`
  margin: 3.5rem auto 0;
  width: 100%;
  max-width: 500px;
`;

export const ContentContainer = styled.div`
  margin: 1.75rem 0;

  ${props => props.theme.media.sm} {
    text-align: center;
  }
`;

export const ContentEmpty = styled.p`
  margin: 1.5rem 0;
  text-align: center;
  font-style: italic;
  opacity: 0.85;
`;

export const ContentHeader = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ContentLinkTitle = styled.a`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.main};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.colors.accent};
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContentSubText = styled.p`
  opacity: 0.9;
  color: ${props => props.theme.colors.text.dark};

  ${props => props.theme.media.sm} {
    width: 80%;
    min-width: 300px;
    margin: 0 auto;
  }
`;
