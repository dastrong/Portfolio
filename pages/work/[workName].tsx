import React from "react";
import fs from "fs";
import path from "path";
import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import Image from "next/image";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";
import ReactMarkdown from "react-markdown";

import InterLink from "components/Shared/Links";
import PageHead from "components/Shared/PageHead";
import Tags from "components/Shared/Tags";
import { StyledBlockquote } from "components/Shared/StyledBlockquote";
import { StyledHeader } from "components/Shared/StyledHeader";
import { StyledParagraph } from "components/Shared/StyledParagraph";
import useEnterAnimation from "hooks/useEnterAnimation";

import type { WorkTypes } from "components/Work/Work.types";
import * as Styled from "components/Work/WorkNamePage.styles";

export default function ViewWork({
  image,
  description,
  links,
  site_name,
  tech_used,
  workContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [refButtons, inViewButtons] = useEnterAnimation();
  const [refText, inViewText] = useEnterAnimation();

  return (
    <PageHead
      title={site_name}
      description={description}
      ogImage={"/c_pad,h_300,w_525" + image.img_file}
      ogImageAlt={site_name + " social media banner"}
    >
      <StyledHeader underlined>{site_name}</StyledHeader>

      <Styled.PageContainer>
        <Styled.ImageWrapper>
          <Image
            priority
            src={image.img_file}
            alt={site_name + " mockup"}
            height={image.height}
            width={image.width}
            blurDataURL={image.base64}
            placeholder="blur"
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 750px, 1000px"
          />
        </Styled.ImageWrapper>

        <Styled.ButtonGroup ref={refButtons}>
          <Styled.Button
            primary
            href={links.live}
            target="_blank"
            rel="noopener"
            inView={inViewButtons}
            direction="toRight"
          >
            View Site
          </Styled.Button>

          {links.github ? (
            <Styled.Button
              href={links.github}
              target="_blank"
              rel="noopener"
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
            components={{
              p({ children }) {
                return <StyledParagraph>{children}</StyledParagraph>;
              },
              blockquote({ children }) {
                return <StyledBlockquote>{children}</StyledBlockquote>;
              },
            }}
          >
            {workContent}
          </ReactMarkdown>
        </Styled.TextContainer>

        <Tags tags={tech_used} addContainerStyles={Styled.TagContainerStyles} />
      </Styled.PageContainer>
    </PageHead>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const work = await import(".forestry/front_matter/templates/work-item.yml");
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

export const getStaticProps = async ctx => {
  const { workName } = ctx.params;

  const workMark = await import(`content/work/${workName}.md`);
  const workMatter = matter(workMark.default);
  const workData = workMatter.data as WorkTypes;

  const {
    base64,
    img: { width, height },
  } = await getPlaiceholder(
    process.env.NEXT_PUBLIC_CLOUD_URL + workData.img_file,
    {
      size: 48,
    }
  );

  return {
    props: {
      ...workData,
      image: { base64, height, width, img_file: workData.img_file },
      workContent: workMatter.content,
    },
  };
};
