import React from "react";
import * as Styled from "./BlogMarkdownSnippet.styles";

export default function BlogMarkdownSnippet(props) {
  return (
    <Styled.SnippetWrapper>
      <Styled.SnippetImageWrapper {...props}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Styled.SnippetImageWrapper>
      <Styled.SnippetCaptionLink
        href="https://carbon.now.sh"
        target="_blank"
        rel="noreferrer"
      >
        <Styled.SnippetCaptionImage src="/carbonlogo.svg" />
        carbon.now.sh
      </Styled.SnippetCaptionLink>
    </Styled.SnippetWrapper>
  );
}
