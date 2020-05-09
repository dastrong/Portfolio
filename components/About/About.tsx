import React from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import * as Styled from "./About.styles";

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

      <Header>About Me</Header>

      <Styled.Container>
        <Styled.Image src={data.image} alt="daniel strong" />
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
