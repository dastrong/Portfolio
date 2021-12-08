import React, { useState } from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import { useInView } from "react-intersection-observer";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import WorkItem from "components/Work/WorkItem";
import type { WorkTypes } from "components/Work/Work.types";
import * as Styled from "components/Work/WorkPage.styles";
import { intersectionOptions } from "utils/intersectionOptions";

const initialCount = 3;

export default function Work({
  works,
}: {
  works: WorkTypes[] & { routeName: string };
}) {
  const [showButtonRef, showButtonInView] = useInView({
    ...intersectionOptions,
    triggerOnce: false,
  });
  const [otherWorkShowCount, setOtherWorkShowCount] = useState(initialCount);
  const showMore = works.length > otherWorkShowCount;

  return (
    <PageHead
      title="Daniel Strong's Work"
      description="Want to see what I've worked on? View some of my past work for clients and in projects now."
    >
      <Styled.PageContainer>
        <StyledHeader underlined>Featured Work</StyledHeader>
        {works.slice(6).map((work, i) => (
          <WorkItem key={work.site_name} {...work} priority={!i} featured />
        ))}

        <Styled.SubHeading>Additional Work</Styled.SubHeading>
        {works.map(
          (work, i) =>
            i < otherWorkShowCount && (
              <WorkItem key={work.site_name} {...work} priority={!i} />
            )
        )}

        <Styled.Button
          as="button"
          ref={showButtonRef}
          inView={showButtonInView}
          onClick={() =>
            setOtherWorkShowCount(state =>
              showMore ? state + 3 : initialCount
            )
          }
        >
          Show {works.length > otherWorkShowCount ? "more" : "less"} work
        </Styled.Button>
      </Styled.PageContainer>
    </PageHead>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get root path
  const root = path.join(process.cwd());

  const workMark = await import("content/pages/work.md");
  const workMatter = matter(workMark.default);
  const allWorkPaths = workMatter.data.work_order as string[];

  // create an array of all work content
  const allWorkContent = allWorkPaths.map((filename: string) => {
    const filePath = path.join(root, filename);
    const routeName = filename.slice(13, -3);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { ...data, routeName };
  });

  return {
    props: {
      works: allWorkContent,
    },
  };
};
