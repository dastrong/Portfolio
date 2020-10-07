import React from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import PageHead from "components/Shared/PageHead";
import OptimizedImage from "components/Shared/OptimizedImage";
import { StyledHeader } from "components/Shared/StyledHeader";
import * as Styled from "components/About/About.styles";

export default function About({
  data,
  content,
}: {
  data: { image: string };
  content: string;
}) {
  return (
    <>
      <PageHead
        title="About Me"
        description="Get to know the man behind Daniel Strong Tech."
      />

      <StyledHeader underlined>About Me</StyledHeader>

      <Styled.Container>
        <OptimizedImage
          webp
          imgFile={data.image}
          containerStyles={Styled.ImageContainer}
          alt="Daniel Strong"
        />
        <Styled.TextContainer>
          <ReactMarkdown
            source={content}
            renderers={{ paragraph: Styled.Text }}
          />
        </Styled.TextContainer>
      </Styled.Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mark = await import("content/pages/about.md");
  const { data, content } = matter(mark.default);
  return { props: { data, content } };
};
