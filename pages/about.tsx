import React from "react";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";
import ReactMarkdown from "react-markdown";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import * as Styled from "components/About/About.styles";

export default function About({
  content,
  image,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageHead
      title="About Me"
      description="Learn more about the man behind Daniel Strong Tech."
    >
      <StyledHeader underlined>About Me</StyledHeader>

      <Styled.Container>
        <Styled.ImageWrapper>
          <Image
            priority
            src={image.img_file}
            alt="Daniel Strong"
            height={image.height}
            width={image.width}
            layout="responsive"
            sizes="(max-width: 500px) 85vw, 40vw"
            placeholder="blur"
            blurDataURL={image.base64}
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
    </PageHead>
  );
}

export const getStaticProps = async () => {
  const mark = await import("content/pages/about.md");
  const { content, data } = matter(mark.default);

  const {
    base64,
    img: { width, height },
  } = await getPlaiceholder(process.env.CLOUD_URL + data.img_file);

  return {
    props: {
      image: { base64, height, width, img_file: data.img_file as string },
      content,
    },
  };
};
