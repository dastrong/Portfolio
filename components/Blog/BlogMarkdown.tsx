import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import styled, { useTheme } from "styled-components";
import { Img } from "react-optimized-image";

import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import InterLink from "components/Shared/Links";
import { StyledParagraph } from "components/Shared/StyledParagraph";
import BlogMarkdownSnippet from "./BlogMarkdownSnippet";
import * as Styled from "./BlogMarkdown.styles";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

const MarkdownHeading = (props: { children: ReactNode; level: number }) => (
  <Styled.Heading
    {...props}
    incrementer={0.3}
    level={props.level}
    as={`h${props.level}` as never}
  />
);

// pass the src from markdown and the custom css styles
const MarkdownImage = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  const isHttpImage = src.startsWith("http");

  return isHttpImage ? (
    <Styled.ImageHttp src={src} alt={alt} title={title} loading="lazy" />
  ) : (
    <OptimizedImage
      imgFile={src}
      alt={alt}
      title={title}
      containerStyles={Styled.Image}
    >
      <StyledImage webp src={require(`images/blog_${src.substring(5)}`)} />
    </OptimizedImage>
  );
};

const MarkdownList = (props: { children: ReactNode; ordered: boolean }) => (
  <Styled.List {...props} as={props.ordered ? "ol" : "ul"} />
);

// need to render a div instead of p - re: invalid markup
const MarkdownParagraph = (props: { children: ReactNode }) => {
  const elProps = props.children[0].props;
  const elPropKeys = Object.keys(elProps);
  const imageProps = ["src", "alt"];
  const isImage = imageProps.every(imgProp => elPropKeys.includes(imgProp));
  const isHttpImage = isImage && elProps.src.startsWith("http");

  return isImage && !isHttpImage ? (
    <BlogMarkdownSnippet {...props} />
  ) : (
    <StyledParagraph {...props} />
  );
};

const MarkdownLink = (props: { children: ReactNode; href: string }) =>
  props.href.startsWith("/") ? (
    <InterLink {...props} StyledAnchor={Styled.Link} />
  ) : (
    <Styled.Link {...props} />
  );

const renderers = {
  heading: MarkdownHeading,
  image: MarkdownImage,
  list: MarkdownList,
  paragraph: MarkdownParagraph,
  blockquote: Styled.Blockquote,
  link: MarkdownLink,
  listItem: Styled.ListItem,
  table: Styled.Table,
};

export default function StyledMarkdown({ content }: { content: string }) {
  const { colors } = useTheme();

  return (
    <Styled.Wrapper as="article">
      <ReactMarkdown
        escapeHtml={false}
        skipHtml={false}
        source={content}
        renderers={renderers}
      />

      {/* Need to add styling for the html snippets in markdown */}
      <style jsx global>
        {`
          article figure {
            margin: 0.75rem auto;
          }

          @keyframes shimmer {
            0% {
              background-position: -600px 0;
            }
            100% {
              background-position: 600px 0;
            }
          }

          article figure div {
            margin: 0 auto;
            width: fit-content;
            animation: shimmer 2s infinite;
            background: linear-gradient(
              to right,
              #272822 0%,
              ${colors.pink}15 17%,
              #272822 42%
            );
            background-color: #272822;
            background-size: 600px 43%;
          }

          article figure div img {
            max-width: 100%;
            height: auto;
            margin: 0 auto;
            display: block;
          }

          article figure figcaption {
            margin-top: 0.25rem;
            font-size: 0.9rem;
            text-align: center;
          }

          article figure figcaption a {
            ${Styled.LinkStyles}
          }

          article figure figcaption a:after {
            background-color: ${colors.accent};
            ${Styled.LinkAfterStyles}
          }
        `}
      </style>
    </Styled.Wrapper>
  );
}
