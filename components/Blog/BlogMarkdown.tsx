import React, { ReactNode, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCheck, FaCopy } from "react-icons/fa";
import ReactMarkdown, { Components } from "react-markdown";
import { PluggableList } from "react-markdown/lib/react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";

import InterLink from "components/Shared/Links";
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
    <Styled.Heading level={1} as="h1">
      {props.children}
    </Styled.Heading>
  ),
  h2: props => (
    <Styled.Heading level={2} as="h2">
      {props.children}
    </Styled.Heading>
  ),
  h3: props => (
    <Styled.Heading level={3} as="h3">
      {props.children}
    </Styled.Heading>
  ),
  h4: props => (
    <Styled.Heading level={4} as="h4">
      {props.children}
    </Styled.Heading>
  ),
  h5: props => (
    <Styled.Heading level={5} as="h5">
      {props.children}
    </Styled.Heading>
  ),
  h6: props => (
    <Styled.Heading level={6} as="h6">
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
    // any other external links will get a styled anchor tag
    if (!props.href.startsWith("/")) return <Styled.Link {...props} />;
    // internal link, use Next Link tag
    return (
      <InterLink
        {...props}
        href={props.href || ""}
        StyledAnchor={Styled.Link}
      />
    );
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
    return props.src.startsWith("http") ? (
      <Styled.ImageHttp {...props} loading="lazy" />
    ) : (
      <Styled.Image
        src={`Portfolio/${props.src}`}
        alt="Daniel Strong"
        title={props.title}
        layout="fill"
        objectFit="contain"
        objectPosition="center top"
        sizes="(max-width: 650px) 100vw, 600px"
        placeholder="blur"
        blurDataURL={`https://res.cloudinary.com/dastrong/image/upload/c_scale,f_auto,w_50/Portfolio/${props.src}`}
      />
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
            content: attr(data-language) " ";
            position: absolute;
            bottom: 0.75rem;
            right: 0.5rem;
            font-size: 0.75rem;
            opacity: 0.7;
          }
        `}
      </style>
    </Styled.Wrapper>
  );
}
