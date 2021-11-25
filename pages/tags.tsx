import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import matter from "gray-matter";
import styled from "styled-components";

import PageHead from "components/Shared/PageHead";
import Tags from "components/Shared/Tags";
import { BlogCard, WorkCard } from "components/Shared/Cards";
import { StyledHeader } from "components/Shared/StyledHeader";

import type { WorkTypes } from "components/Work/Work.types";
import type { BlogTypes } from "components/Blog/Blog.types";

const StyledTypeHeader = styled.h2`
  margin: 3.5rem auto 0;
  font-size: ${props => props.theme.fontSize.lg};
  text-align: center;
`;

const StyledEmpty = styled.p`
  margin: 1.5rem 0;
  text-align: center;
  font-style: italic;
`;

export default function TagsPage({
  tags,
  posts,
  works,
}: {
  tags: string[];
  posts: BlogTypes[];
  works: WorkTypes[];
}) {
  // use the router object to grab the query object for displaying certain tag related content
  const router = useRouter();

  // grab the searched query from the url
  const currentTag = router.query.q?.toString() || "";

  // filter out the works that aren't related to the currentTag
  const workList = works.filter(
    work => !currentTag || work.tech_used.includes(currentTag)
  );

  // filter out the blog posts that aren't related to the currentTag
  const postList = posts.filter(
    post => !currentTag || post.tags.includes(currentTag)
  );

  return (
    <PageHead
      title={
        currentTag
          ? `Results for: ${currentTag}`
          : `Search For Daniel Strong Content`
      }
      description="Looking for something specific? Filter my work and posts by any available tag."
    >
      <StyledHeader underlined>Tags</StyledHeader>

      <Tags tags={tags} currentTag={currentTag} />

      {/* Show work or posts related that use the chosen tag */}
      <StyledTypeHeader>Related Posts</StyledTypeHeader>
      {postList.length === 0 ? (
        <StyledEmpty>No blog posts related to: {currentTag}</StyledEmpty>
      ) : (
        postList.map(post => <BlogCard key={post.title} {...post} />)
      )}

      {/* Show work or posts related that use the chosen tag */}
      <StyledTypeHeader>Related Work</StyledTypeHeader>
      {workList.length === 0 ? (
        <StyledEmpty>No work containing: {currentTag}</StyledEmpty>
      ) : (
        workList.map(work => <WorkCard key={work.site_name} {...work} />)
      )}
    </PageHead>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const postFrontMatter = await import(
    ".forestry/front_matter/templates/blog-post.yml"
  );
  const workFrontMatter = await import(
    ".forestry/front_matter/templates/work-item.yml"
  );

  // get all the paths
  const allPostPaths = matter(postFrontMatter.default).data.pages;
  const allWorkPaths = matter(workFrontMatter.default).data.pages;

  // create an array of all completed posts
  const allPosts = allPostPaths
    .map((filename: string) => {
      const filePath = path.join(root, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data;
    })
    .filter(post => post.show_post);
  // create an array of all completed posts
  const allWorks = allWorkPaths
    .map((filename: string) => {
      const filePath = path.join(root, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data;
    })
    .filter(work => work.show_work);

  // grabbing all tags for each data type
  const allPostsTags = allPosts.reduce(
    (acc, cVal) => [...acc, ...cVal.tags],
    []
  );
  const allWorksTags = allWorks.reduce(
    (acc, cVal) => [...acc, ...cVal.tech_used],
    []
  );

  // get and sort all unique tags
  const uniqueSortedTags = Array.from(
    new Set([...allPostsTags, ...allWorksTags])
  ).sort();

  return {
    props: {
      tags: uniqueSortedTags,
      works: allWorks,
      posts: allPosts,
    },
  };
};
