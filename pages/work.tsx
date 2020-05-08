import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import styled from "styled-components";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  min-width: 310px;
  max-width: ${props => props.theme.width.md}px;
`;

type WorkTypes = {
  site_name: string;
  image: string;
  description: string;
  tech_used: string[];
  show_work: boolean;
  links: {
    github?: string;
    live: string;
  };
};

export default function Work({ works }: { works: WorkTypes[] }) {
  return (
    <>
      <PageHead
        title="My Work"
        description="Check out some of my past work for clients and personal projects."
      />

      <Header>My Work</Header>

      <PageContainer>
        {works.map(work => (
          <div key={work.site_name}>
            {work.site_name}
            <img src={work.image} alt="site" />
          </div>
        ))}
      </PageContainer>
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
