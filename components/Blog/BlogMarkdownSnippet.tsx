import React from "react";
import * as Styled from "./BlogMarkdownSnippet.styles";

export default function BlogMarkdownSnippet(props) {
  return (
    <Styled.SnippetWrapper>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}

      <Styled.SnippetCaptionLinkContainer>
        <Styled.SnippetCaptionLink
          href="https://carbon.now.sh"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            aria-label="Carbon Logo"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="14"
            viewBox="0 0 335 83"
          >
            <path
              d="M296 78V46c0-5 2-9 4-12s6-4 10-4 7 1 9 3l2 9v36h11V41c0-6-2-11-4-15-3-3-7-5-13-5-4 0-7 1-10 3l-6 6-3 5V23h-11v55h11zm8-57c3-2 6-3 11-3 7 0 12 2 15 7 3 4 5 9 5 16v40h-17V42l-2-7-6-2c-3 0-6 1-8 3-2 3-3 6-3 10v35h-17V20h17v5l5-4zm-79 29c0 5 0 9 2 12 1 4 2 7 5 9 2 3 4 5 7 6l11 2 11-2c3-1 6-3 8-6l5-9 1-12-1-12-5-9-8-6-11-2-11 2-7 6c-3 3-4 6-5 9-2 4-2 8-2 12zm-3 0l2-13 5-10 9-6 12-3c5 0 9 1 12 3 4 1 6 3 9 6l5 10c2 4 2 9 2 13 0 5 0 9-2 13l-5 10c-2 3-5 5-9 7l-12 2-12-2-9-7-5-10-2-13zm14 9V42c0-4 2-7 4-9 3-3 6-4 10-4s7 1 10 3c2 3 4 6 4 10v17c0 4-2 7-4 9-3 2-6 3-10 3s-7-1-10-3c-2-2-4-5-4-9zm3 0c0 3 1 5 3 7l8 2 8-2c2-2 3-4 3-7V42c0-3-1-6-3-7-2-2-5-3-8-3s-6 1-8 3c-2 1-3 4-3 7v17zm-63 19V66l2 5 7 6 9 2a18 18 0 0015-8l4-9a49 49 0 000-23c-1-4-2-7-4-9-1-3-4-5-6-6l-9-3c-4 0-7 1-9 3-3 1-5 3-7 6l-2 4V3h-11v75h11zm3 3h-17V0h17v25l4-4c3-2 7-3 11-3a21 21 0 0118 10l4 10a52 52 0 010 24l-4 11-8 7-10 2a20 20 0 01-15-6v5zm-3-26v-9c0-5 1-9 3-12s6-5 11-5c4 0 7 2 10 4 2 2 3 5 3 9v16c0 4-1 7-4 10-2 2-5 3-9 3-5 0-9-1-11-5-2-3-3-7-3-11zm3 0l2 10c2 2 5 3 9 3 3 0 6-1 7-3 2-1 3-4 3-7V42c0-3-1-5-3-7-1-2-4-3-7-3-4 0-7 2-9 4l-2 10v9zm-42 23V31h17v-8h-28v55h11zm3 3h-17V20h34v14h-17v47zM77 32c2-2 4-3 8-3 3 0 5 1 7 3 2 1 3 4 3 8v5h-1l-16 1c-6 1-10 2-13 6-3 3-4 6-4 11l1 6 3 5a16 16 0 0012 5l10-2 6-7v-1h3v9h19v-8h-9V40c0-6-2-11-6-14-3-3-8-5-15-5l-9 2c-3 0-5 1-7 3a16 16 0 00-6 12h11c0-3 1-5 3-6zm12 47c-3 2-7 3-12 3l-8-1a19 19 0 01-10-10 20 20 0 014-21c3-4 8-6 15-7l14-1v-2l-2-6-5-2-6 2c-2 1-3 3-3 5v2H59l1-2c0-3 0-6 2-9 1-3 3-5 5-6l8-4 10-2c7 0 13 2 17 6 5 3 7 9 7 16v27h9v14H93v-6l-4 4zM72 64v-5c0-3 2-5 5-5l18-2v4c0 4-1 8-3 11-3 3-6 4-10 4l-7-1c-2-2-3-3-3-6zm5-7l-2 2v5c0 2 1 2 2 3l5 1c3 0 5-1 7-3 2-3 3-5 3-9l-15 1zM48 32l-5-6-7-4-8-1-10 2-8 6-5 9-1 13 1 11c1 4 3 7 5 9 2 3 4 5 7 6l11 2 8-1 7-4 5-6 2-7H39c0 3-2 6-4 7-2 2-4 3-8 3l-9-3c-2-3-3-6-3-10V42c0-4 1-7 4-9 2-3 5-4 8-4s6 1 8 3c2 1 3 4 4 7h11l-2-7zM1 51l1-14c2-4 3-7 6-10 2-3 5-5 8-6 4-2 7-3 12-3l9 2 7 4c3 1 5 4 6 7 2 2 3 6 3 10v1H36v-1c0-3-1-6-3-7l-6-2c-2 0-5 1-6 3-2 1-3 4-3 7v16c0 3 1 6 3 7 1 2 3 3 6 3l7-2c1-1 2-3 2-7l1-1h16v1l-2 10a22 22 0 01-14 12l-9 1-12-2-9-7-5-10-1-12z"
              fill="#F8E81C"
            />
          </svg>
          carbon.now.sh
        </Styled.SnippetCaptionLink>
      </Styled.SnippetCaptionLinkContainer>
    </Styled.SnippetWrapper>
  );
}
