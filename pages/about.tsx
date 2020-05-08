import React from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 50px;
  width: 90%;
  min-width: 310px;
  max-width: ${props => `${props.theme.width.md}px`};

  ${props => props.theme.media.md} {
    flex-direction: column;
  }
`;

const StyledTextContainer = styled.div`
  background-color: ${props => props.theme.colors.background.light}cf;
  width: 75%;
  margin-left: 30px;
  padding: 10px;

  ${props => props.theme.media.md} {
    margin: 20px auto 0;
  }

  ${props => props.theme.media.sm} {
    width: 85%;
  }

  ${props => props.theme.media.xs} {
    min-width: 310px;
    max-width: 375px;
  }
`;

const StyledImage = styled.img`
  height: auto;
  width: 40%;
  min-width: 310px;
  max-width: 375px;
  border-radius: 155px;
  box-shadow: 0px 0px 1px 3px ${props => props.theme.colors.accent};

  ${props => props.theme.media.sm} {
    min-width: 250px;
  }
`;

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.2px;
  margin: 20px 0;
  font-weight: 300;

  &:first-child,
  &:last-child {
    margin: 0;
  }
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

      <Header>About Me</Header>

      <StyledContainer>
        <StyledImage src={data.image} alt="daniel strong" />
        <StyledTextContainer>
          <ReactMarkdown
            source={content}
            renderers={{ paragraph: StyledText }}
          />
        </StyledTextContainer>
      </StyledContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mark = await import("content/pages/about.md");
  const { data, content } = matter(mark.default);
  return { props: { data, content } };
};
