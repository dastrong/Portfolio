import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import WorkItem from "components/Work/WorkItem";
import { WorkTypes } from "components/Work/WorkTypes";
import * as Styled from "components/Work/WorkPage.styles";

export default function Work({
  works,
}: {
  works: WorkTypes[] & { routeName: string };
}) {
  return (
    <>
      <PageHead
        title="My Work"
        description="Check out some of my past work for clients and personal projects."
      />

      <StyledHeader underlined>My Work</StyledHeader>

      <Styled.PageContainer>
        {works.map(work => (
          <WorkItem key={work.site_name} {...work} />
        ))}
      </Styled.PageContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const work = await import(".forestry/front_matter/templates/work.yml");
  const allWorkPaths = matter(work.default).data.pages;

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
