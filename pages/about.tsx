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
  margin: 20px auto;
  width: 90%;
  min-width: 310px;
  max-width: ${props => `${props.theme.width.lg}px`};
`;

const StyledColumn = styled.div`
  width: 75%;
  margin-left: 30px;
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
  min-width: 310px;
  max-width: 375px;
  border-radius: 30px;
`;

// const StyledText = styled.p`
//   font-size: 1rem;
//   line-height: 110%;
//   letter-spacing: 0.2px;
//   margin: 20px 0;

//   &:first-child,
//   &:last-child {
//     margin: 0;
//   }
// `;

type AboutTypes = {
  body: string;
  image: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function About({ data }: { data: AboutTypes }) {
  return (
    <>
      <PageHead
        title="About Me"
        description="Get to know the man behind Daniel Strong Tech."
      />

      <Header>About Me</Header>

      <StyledContainer>
        <StyledImage src={data.image} alt="daniel strong" />
        <StyledColumn>
          <ReactMarkdown source={data.body} />
          {/* <StyledText>{data.body}</StyledText> */}
        </StyledColumn>
      </StyledContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mark = await import("content/pages/about.md");
  const { data } = matter(mark.default);
  return { props: { data } };
};
