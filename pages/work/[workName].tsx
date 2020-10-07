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
import { StyledParagraph } from "components/Shared/StyledParagraph";
import useEnterAnimation from "hooks/useEnterAnimation";

import { WorkTypes } from "components/Work/WorkTypes";
import * as Styled from "components/Work/WorkNamePage.styles";

export default function ViewWork({
  data: { description, image, links, site_name, tech_used },
  content,
}: {
  data: WorkTypes;
  content: string;
}) {
  const [refButtons, inViewButtons] = useEnterAnimation();
  const [refText, inViewText] = useEnterAnimation();

  return (
    <>
      <PageHead title={`${site_name} | My Work`} description={description} />

      <Header>{site_name}</Header>

      <Styled.PageContainer>
        <OptimizedImage
          imgFile={image}
          containerStyles={Styled.Image}
          alt={site_name + "preview"}
        />

        <Styled.ButtonGroup ref={refButtons}>
          <Styled.Button
            primary
            href={links.live}
            target="_blank"
            inView={inViewButtons}
            direction="toRight"
          >
            View Site
          </Styled.Button>

          {links.github ? (
            <Styled.Button
              href={links.github}
              target="_blank"
              inView={inViewButtons}
              direction="toLeft"
            >
              View Source
            </Styled.Button>
          ) : (
            <InterLink
              href="/contact"
              StyledAnchor={Styled.Button}
              inView={inViewButtons}
              direction="toLeft"
            >
              Source Inquiry
            </InterLink>
          )}
        </Styled.ButtonGroup>

        <Styled.TextContainer ref={refText} inView={inViewText}>
          <ReactMarkdown
            source={content}
            renderers={{
              paragraph: StyledParagraph,
              blockquote: StyledBlockquote,
            }}
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
