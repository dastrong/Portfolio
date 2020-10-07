import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import OptimizedImage from "components/Shared/OptimizedImage";
import InterLink from "components/Shared/Links";
import { StyledParagraph } from "components/Shared/StyledParagraph";

import BlogMarkdownSnippet from "./BlogMarkdownSnippet";
import * as Styled from "./BlogMarkdown.styles";

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
}) => (
  <OptimizedImage
    imgFile={src}
    alt={alt}
    title={title}
    containerStyles={Styled.Image}
  />
);

const MarkdownList = (props: { children: ReactNode; ordered: boolean }) => (
  <Styled.List {...props} as={props.ordered ? "ol" : "ul"} />
);

// need to render a div instead of p - re: invalid markup
const MarkdownParagraph = (props: { children: ReactNode }) =>
  props.children[0].type.name === "MarkdownImage" ? (
    <BlogMarkdownSnippet {...props} />
  ) : (
    <StyledParagraph {...props} />
  );

const MarkdownLink = (props: { children: ReactNode; href: string }) =>
  props.href.startsWith("/") ? (
    <InterLink {...props} StyledAnchor={Styled.Link} />
  ) : (
    <Styled.Link {...props} />
  );

export default function StyledMarkdown({ content }: { content: string }) {
  return (
    <Styled.Wrapper as="article">
      <ReactMarkdown
        source={content}
        renderers={{
          heading: MarkdownHeading,
          image: MarkdownImage,
          list: MarkdownList,
          paragraph: MarkdownParagraph,
          blockquote: Styled.Blockquote,
          link: MarkdownLink,
          listItem: Styled.ListItem,
          table: Styled.Table,
        }}
      />
    </Styled.Wrapper>
  );
}
