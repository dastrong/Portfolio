import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import { WorkTypes } from "./WorkTypes";
import * as Styled from "./Work.styles";

export default function Work({ works }: { works: WorkTypes[] }) {
  return (
    <>
      <PageHead
        title="My Work"
        description="Check out some of my past work for clients and personal projects."
      />

      <Header>My Work</Header>

      <Styled.PageContainer>
        {works.map(work => (
          <div key={work.site_name}>
            {work.site_name}
            <img src={work.image} alt="site" />
          </div>
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
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data;
  });

  return {
    props: {
      works: allWorkContent,
    },
  };
};
