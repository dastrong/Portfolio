import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import styled from "styled-components";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import { StyledButton } from "components/Shared/StyledButton";
import { WorkTypes } from "components/Work/WorkTypes";
import ReactMarkdown from "react-markdown";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(100%);
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  width: 100%;
  min-width: 310px;
  margin: 10px auto 30px;

  ${props => props.theme.media.lg} {
    max-width: 750px;
  }
`;

const StyledImage = styled.img`
  border-radius: ${props => props.theme.borderRadius}px;
  height: auto;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / 10;

  ${props => props.theme.media.xl} {
    grid-column: 1 / 8;
  }

  ${props => props.theme.media.lg} {
    grid-row: 1;
    grid-column: 1 / 13;
  }
`;

const StyledButtonGroup = styled.div`
  grid-row: 1;
  grid-column: 4 / 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  ${props => props.theme.media.lg} {
    grid-row: 2;
    grid-column: 1 / 13;
  }
`;

const StyledTextContainer = styled.div`
  grid-row: 2;
  grid-column: 10 / 13;

  ${props => props.theme.media.xl} {
    grid-column: 8 / 13;
  }

  ${props => props.theme.media.lg} {
    grid-row: 3;
    grid-column: 1 / 13;
  }
`;

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.2px;
  margin: 20px 0;
  font-weight: 300;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Button = styled(StyledButton)`
  flex: 1;

  &:first-child {
    margin-left: 0px !important;
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
    margin-right: 0px !important;
  }
`;

export default function ViewWork({
  data,
  content,
}: {
  data: WorkTypes;
  content: string;
}) {
  const { description, image, links, show_work, site_name, tech_used } = data;

  if (!show_work) return null;

  return (
    <>
      <PageHead title={`${site_name} | My Work`} description={description} />

      <Header>{site_name}</Header>

      <StyledContainer>
        <StyledButtonGroup>
          <Button primary href={links.live} target="_blank">
            View Site
          </Button>

          {links.github && (
            <Button href={links.github} target="_blank">
              View Source
            </Button>
          )}
        </StyledButtonGroup>

        <StyledImage src={image} alt={site_name} />

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

export const getStaticPaths: GetStaticPaths = async () => {
  const work = await import(".forestry/front_matter/templates/work.yml");
  const allWorkPaths = matter(work.default).data.pages;
  const paths = allWorkPaths.map(path => ({
    params: { workName: path.slice(13, -3) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { workName } = ctx.params;
  const mark = await import(`content/work/${workName}.md`);
  const { data, content } = matter(mark.default);
  return { props: { data, content } };
};
