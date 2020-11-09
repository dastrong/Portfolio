import React from "react";
import { Img } from "react-optimized-image";
import styled from "styled-components";
import * as Styled from "./BlogMarkdownSnippet.styles";

const StyledCaptionImage = styled(Img)`
  height: 14px;
  width: 56px;
`;

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
        <StyledCaptionImage
          src={require("images/misc_blogcarbonlogo.svg")}
          sizes={[56]}
          alt="carbon logo"
        />
        carbon.now.sh
      </Styled.SnippetCaptionLink>
    </Styled.SnippetWrapper>
  );
}
