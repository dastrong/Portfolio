import React from "react";
import * as Styled from "./FooterSub.styles";

export default function FooterSub() {
  return (
    <Styled.Container>
      <Styled.Text>&copy; 2021 All Rights Reserved</Styled.Text>

      <Styled.Text>
        Designed by:{" "}
        <Styled.HighlightedTextLink
          href="https://www.danielstrong.tech"
          target="_blank"
          rel="noopener"
        >
          Daniel Strong
        </Styled.HighlightedTextLink>
      </Styled.Text>
    </Styled.Container>
  );
}
