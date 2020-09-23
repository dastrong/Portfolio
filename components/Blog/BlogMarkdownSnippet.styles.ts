import styled from "styled-components";

export const SnippetWrapper = styled.div`
  position: relative;
  margin: 1rem auto;
`;

export const SnippetImageWrapper = styled.div`
  overflow-x: auto;
  /* this bg-color matches the snippet bg-color */
  background-color: #272822;
`;

export const SnippetCaptionLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.4rem;
  color: #aba8a8;
  position: absolute;
  bottom: 22px;
  right: 5px;
  z-index: 1;
`;

export const SnippetCaptionImage = styled.img`
  height: 14px;
  width: 56px;
`;
