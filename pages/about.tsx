import React from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Img } from "react-optimized-image";

import PageHead from "components/Shared/PageHead";
import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import { StyledHeader } from "components/Shared/StyledHeader";
import * as Styled from "components/About/About.styles";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

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
          imgFile={data.image}
          containerStyles={Styled.ImageContainer}
          alt="Daniel Strong"
        >
          <StyledImage
            src={require(`images/${data.image}`)}
            sizes={[250, 300]}
            breakpoints={[576]}
          ></StyledImage>
        </OptimizedImage>
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
