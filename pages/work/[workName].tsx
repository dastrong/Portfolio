import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Header from "components/Shared/Header";
import InterLink from "components/Shared/Links";
import OptimizedImage from "components/Shared/OptimizedImage";
import PageHead from "components/Shared/PageHead";
import Tags from "components/Shared/Tags";
import { StyledBlockquote } from "components/Shared/StyledBlockquote";

import { WorkTypes } from "components/Work/WorkTypes";
import * as Styled from "components/Work/WorkNamePage.styles";

export default function ViewWork({
  data,
  content,
}: {
  data: WorkTypes;
  content: string;
}) {
  const { description, image, links, site_name, tech_used } = data;

  return (
    <>
      <PageHead title={`${site_name} | My Work`} description={description} />

      <Header>{site_name}</Header>

      <Styled.PageContainer>
        <Styled.ButtonGroup>
          <Styled.Button primary href={links.live} target="_blank">
            View Site
          </Styled.Button>

          {links.github ? (
            <Styled.Button href={links.github} target="_blank">
              View Source
            </Styled.Button>
          ) : (
            <InterLink href="/contact" StyledAnchor={Styled.Button}>
              Source Inquiry
            </InterLink>
          )}
        </Styled.ButtonGroup>

        <OptimizedImage
          imgFile={image}
          containerStyles={Styled.Image}
          alt={site_name + "preview"}
        />

        <Styled.TextContainer>
          <ReactMarkdown
            source={content}
            renderers={{ paragraph: Styled.Text, blockquote: StyledBlockquote }}
          />
        </Styled.TextContainer>

        <Tags tags={tech_used} addContainerStyles={Styled.TagContainerStyles} />
      </Styled.PageContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const work = await import(".forestry/front_matter/templates/work.yml");
  const allWorkPaths = matter(work.default).data.pages;

  // create an array of all completed work
  const allFilteredPaths = allWorkPaths.filter((filename: string) => {
    const filePath = path.join(root, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data.show_work;
  });

  const paths = allFilteredPaths.map(path => ({
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
