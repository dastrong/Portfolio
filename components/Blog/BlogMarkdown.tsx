import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCheck, FaCopy } from "react-icons/fa";
import ReactMarkdown, { Components } from "react-markdown";
import { PluggableList } from "react-markdown/lib/react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";

import { getShimmerDataURL } from "utils/getShimmerDataURL";
import MarkdownLink from "components/Shared/MarkdownLink";
import { useBlogImages } from "components/Blog/BlogContext";
import * as Styled from "./BlogMarkdown.styles";

const rehypePlugins = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: "wrap",
      properties: { className: "heading-link" },
    },
  ],
];

const remarkPlugins = [remarkGfm];

const MarkdownCodeBlock = (props: { children: ReactNode; value: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (isCopied) id = setTimeout(() => setIsCopied(false), 3000);

    return () => clearTimeout(id);
  }, [isCopied]);

  return (
    <>
      <CopyToClipboard text={props.value} onCopy={() => setIsCopied(true)}>
        <Styled.CodeBlockCopy isCopied={isCopied} title="Copy Code Block">
          {isCopied ? <FaCheck /> : <FaCopy />}
          <span>Copied</span>
        </Styled.CodeBlockCopy>
      </CopyToClipboard>
      {props.children}
    </>
  );
};

const components: Components = {
  h1: props => (
    <Styled.Heading level={1} as="h1" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  h2: props => (
    <Styled.Heading level={2} as="h2" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  h3: props => (
    <Styled.Heading level={3} as="h3" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  h4: props => (
    <Styled.Heading level={4} as="h4" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  h5: props => (
    <Styled.Heading level={5} as="h5" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  h6: props => (
    <Styled.Heading level={6} as="h6" id={props.id}>
      {props.children}
    </Styled.Heading>
  ),
  p: props => {
    const firstChild = props.children[0] as { type?: { name?: string } };
    return firstChild?.type?.name === "img" ? (
      <Styled.ImageWrapper>{props.children}</Styled.ImageWrapper>
    ) : (
      <Styled.Paragraph>{props.children}</Styled.Paragraph>
    );
  },
  blockquote: props => <Styled.Blockquote>{props.children}</Styled.Blockquote>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({ node, ref, ...props }) => {
    // this anchor is within a heading, pass a regular anchor tag
    if (props.className === "heading-link") return <a {...props} />;
    // other process it like any other link
    return <MarkdownLink {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code({ node, ref, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const child = String(children);
    const language = match && match[1];
    return !inline && match ? (
      <MarkdownCodeBlock value={child}>
        <SyntaxHighlighter
          {...props}
          showLineNumbers
          PreTag="div"
          style={synthwave84}
          language={language}
          customStyle={{
            fontSize: "0.9em",
            borderRadius: "1rem",
            margin: 0,
            position: "relative",
            paddingBlock: "1.5rem",
          }}
          codeTagProps={
            {
              ["data-language"]: language,
            } as React.HTMLProps<HTMLElement>
          }
          lineNumberStyle={{ minWidth: "2.25em" }}
        >
          {child.replace(/\n$/, "")}
        </SyntaxHighlighter>
      </MarkdownCodeBlock>
    ) : (
      <Styled.InlineCode className={className}>{children}</Styled.InlineCode>
    );
  },
  ul: ({ children }) => <Styled.List as="ul">{children}</Styled.List>,
  ol: ({ children }) => <Styled.List as="ol">{children}</Styled.List>,
  li: ({ children }) => <Styled.ListItem>{children}</Styled.ListItem>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  img: ({ node, ref, ...props }) => {
    // strip the base cloud url if it's there - forestry adds automatically
    const updatedSrc = props.src.replace(process.env.NEXT_PUBLIC_CLOUD_URL, "");

    // check if the image is external/internal
    const isExternal = updatedSrc.startsWith("http");

    const { colors } = useTheme();
    // grab the image heights/widths from the BlogContext
    const images = useBlogImages();

    // get this currently processed image height/width combo
    const { height, width } = images[
      isExternal ? "externalImages" : "internalImages"
    ].find(img => img.url.endsWith(updatedSrc));

    // create a styled shimmerDataURL as a placeholder
    const shimmerDataURL = getShimmerDataURL(
      width,
      height,
      colors.background.light,
      colors.accent
    );

    return (
      <>
        <Styled.Image
          {...props}
          unoptimized={isExternal}
          layout="intrinsic"
          height={height}
          width={width}
          src={updatedSrc}
          placeholder="blur"
          blurDataURL={shimmerDataURL}
        />
        <br />
      </>
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  table: ({ node, ref, ...props }) => <Styled.Table {...props} />,
};

export default function StyledMarkdown({ content }: { content: string }) {
  return (
    <Styled.Wrapper as="article">
      <ReactMarkdown
        components={components}
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins as PluggableList}
      >
        {content}
      </ReactMarkdown>

      {/* Need to add styling for header links */}
      <style jsx global>
        {`
          article .heading-link {
            font-family: inherit;
            font-weight: inherit;
          }

          article .heading-link:hover::after {
            content: "🔗";
            font-size: 0.5em;
            margin-inline-start: 0.3rem;
            vertical-align: middle;
          }

          article pre {
            position: relative;
            margin: 1rem auto 1.5rem;
            overflow: hidden;
          }

          article pre code:after {
            content: attr(data-language) "";
            font-size: 0.75rem;
            opacity: 0.7;
            line-height: 1;
            position: sticky;
            width: 125px;
            top: 100%;
            left: calc(100% - 125px);
            display: block;
            text-align: right;
            margin-right: -0.25rem;
            margin-bottom: -0.75rem;
          }
        `}
      </style>
    </Styled.Wrapper>
  );
}
