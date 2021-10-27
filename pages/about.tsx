import React from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import * as Styled from "components/About/About.styles";

export default function About({ content }: { content: string }) {
  return (
    <>
      <PageHead
        title="About Me"
        description="Learn more about the man behind Daniel Strong Tech."
      />

      <StyledHeader underlined>About Me</StyledHeader>

      <Styled.Container>
        <Styled.ImageWrapper>
          <Styled.Image
            priority
            src="Portfolio/about_me.jpg"
            alt="Daniel Strong"
            height={1026}
            width={672}
            layout="responsive"
            sizes="(max-width: 500px) 85vw, 40vw"
          />
        </Styled.ImageWrapper>

        <Styled.TextContainer>
          <ReactMarkdown
            components={{
              p: ({ children }) => <Styled.Text>{children}</Styled.Text>,
            }}
          >
            {content}
          </ReactMarkdown>
        </Styled.TextContainer>
      </Styled.Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mark = await import("content/pages/about.md");
  const { content } = matter(mark.default);
  return { props: { content } };
};
