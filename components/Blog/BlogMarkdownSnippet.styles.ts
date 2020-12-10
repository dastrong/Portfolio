import styled from "styled-components";

export const SnippetWrapper = styled.div`
  position: relative;
  margin: 1rem auto;

  overflow-x: auto;
  /* this bg-color matches the snippet bg-color */
  background-color: #272822;
  max-width: 600px;
`;

export const SnippetCaptionLinkContainer = styled.div`
  position: sticky;
  left: 0;
  display: flex;
  justify-content: flex-end;
  margin-top: -24px;
  margin-bottom: 5px;
  margin-right: 5px;
  z-index: 1;
`;

export const SnippetCaptionLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.4rem;
  color: #aba8a8;
`;

export const SnippetCaptionImage = styled.img`
  height: 14px;
  width: 56px;
`;
