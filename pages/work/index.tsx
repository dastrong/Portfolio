import React, { useState } from "react";
import fs from "fs";
import path from "path";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import { useInView } from "react-intersection-observer";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import { StyledSubHeading } from "components/Shared/StyledSubHeading";
import WorkItem from "components/Work/WorkItem";
import type { WorkTypes } from "components/Work/Work.types";
import * as Styled from "components/Work/WorkPage.styles";
import { intersectionOptions } from "utils/intersectionOptions";

export default function Work({
  works,
  featuredWorkCount,
  initialOtherWorkCount,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [showButtonRef, showButtonInView] = useInView({
    ...intersectionOptions,
    triggerOnce: false,
  });
  const [otherWorkShowCount, setOtherWorkShowCount] = useState(
    initialOtherWorkCount
  );
  const showMore = works.length - featuredWorkCount > otherWorkShowCount;

  return (
    <PageHead
      title="Daniel Strong's Work"
      description="Want to see what I've worked on? View some of my past work for clients and in projects now."
    >
      <Styled.PageContainer>
        <StyledHeader underlined>Featured Work</StyledHeader>
        {works.slice(0, featuredWorkCount).map(work => (
          <WorkItem key={work.site_name} {...work} featured />
        ))}

        <StyledSubHeading>Additional Work</StyledSubHeading>
        {works
          .slice(featuredWorkCount)
          .map(
            (work, i) =>
              i < otherWorkShowCount && (
                <WorkItem key={work.site_name} {...work} />
              )
          )}

        <Styled.Button
          as="button"
          ref={showButtonRef}
          inView={showButtonInView}
          onClick={() =>
            setOtherWorkShowCount(state =>
              showMore ? state + 6 : initialOtherWorkCount
            )
          }
        >
          {showMore ? <FaCaretDown /> : <FaCaretUp />}
          <span>Show {showMore ? "more" : "less"} work</span>
          {showMore ? <FaCaretDown /> : <FaCaretUp />}
        </Styled.Button>
      </Styled.PageContainer>
    </PageHead>
  );
}

export const getStaticProps = async () => {
  // get root path
  const root = path.join(process.cwd());

  const workMark = await import("content/pages/work.md");
  const workMatter = matter(workMark.default);
  const workData = workMatter.data as {
    featured_work_count: number;
    initial_other_work_count: number;
    work_order: string[];
  };

  // create an array of all work content
  const allWorkContent = workData.work_order.map((filename: string) => {
    const filePath = path.join(root, filename);
    const routeName = filename.slice(13, -3);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const fileMatter = matter(fileContents);
    const data = fileMatter.data as WorkTypes;
    return { ...data, routeName };
  });

  return {
    props: {
      works: allWorkContent,
      featuredWorkCount: workData.featured_work_count,
      initialOtherWorkCount: workData.initial_other_work_count,
    },
  };
};
