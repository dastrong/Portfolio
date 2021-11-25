import React from "react";
import styled, { css } from "styled-components";
import InterLink from "components/Shared/Links";

export const MarkdownLinkCSS = css`
  position: relative;
  display: inline-block;
  transition: 0s 0s all;
  z-index: 0;
  backface-visibility: hidden;
`;

export const MarkdownLinkBeforeCSS = css`
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 2px;
  z-index: -1;
  width: 100%;
  transition: 0.3s transform, 0.4s opacity;
  transform-origin: bottom;
`;

export const MarkdownLinkBeforeHoverCSS = css`
  transform: scaleY(3);
  opacity: 0.6;
`;

export const StyledMarkdownLink = styled.a`
  ${MarkdownLinkCSS}

  &:before {
    background-color: ${props => props.theme.colors.accent};
    ${MarkdownLinkBeforeCSS}
  }

  &:hover:before {
    ${MarkdownLinkBeforeHoverCSS}
  }
`;

export default function MarkdownLink(
  props: {
    children: React.ReactNode;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  // any other external links will get a styled anchor tag
  if (!props.href.startsWith("/")) {
    return <StyledMarkdownLink {...props} target="_blank" rel="noopener" />;
  }
  // internal link, use Next Link tag
  return (
    <InterLink
      {...props}
      href={props.href || ""}
      StyledAnchor={StyledMarkdownLink}
    />
  );
}
