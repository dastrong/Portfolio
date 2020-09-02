import styled from "styled-components";

export const ContentList = styled.div`
  margin: 25px auto 0;
  width: 100%;
  max-width: 500px;
`;

export const ContentContainer = styled.div`
  margin: 1.75rem 0;
  /* margin-bottom: 15px; */
`;

export const ContentHeader = styled.h3`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ContentLinkTitle = styled.a`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
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
  color: ${props => props.theme.colors.text.dark};
`;
