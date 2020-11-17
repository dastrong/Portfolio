import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import styled, { css } from "styled-components";

import { formatDate } from "utils";
import PageHead from "components/Shared/PageHead";
import Tags from "components/Shared/Tags";
import { StyledHeader } from "components/Shared/StyledHeader";

import BlogActions from "components/Blog/BlogActions";
import BlogInfo from "components/Blog/BlogInfo";
import BlogMarkdown from "components/Blog/BlogMarkdown";
import { Blockquote } from "components/Blog/BlogMarkdown.styles";
import { BlogTypes } from "components/Blog/BlogTypes";

const StyledTags = css`
  margin-top: 0.5rem;
`;

const StyledNotificationBox = styled(Blockquote)`
  max-width: 250px;
  margin: 1.5rem auto;
  border-width: 0px 0px 3px;
  text-align: center;
`;

export default function ViewBlog({
  data,
  content,
  previousPostTitle,
  nextPostTitle,
}: {
  data: BlogTypes;
  content: string;
  previousPostTitle: string | null;
  nextPostTitle: string | null;
}) {
  const { date_publish, date_update, tags, title } = data;

  return (
    <>
      <PageHead title={`${title} | Blog`} description={data.description} />

      <StyledHeader>{title}</StyledHeader>

      <BlogInfo date={date_publish} />

      <Tags small tags={tags} addContainerStyles={StyledTags} />

      {date_update && (
        <StyledNotificationBox>
          This post was updated on:
          <br />
          {formatDate(date_update)}
        </StyledNotificationBox>
      )}

      <BlogMarkdown content={content} />

      <BlogActions
        previousPostTitle={previousPostTitle}
        nextPostTitle={nextPostTitle}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const blogPosts = await import(".forestry/front_matter/templates/post.yml");

  const allBlogPostPaths = matter(blogPosts.default).data.pages as string[];

  const allFilteredPaths = allBlogPostPaths
    // need to grab the post dates and if we should show them
    .map((filename: string): {
      filename: string;
      date: string;
      show_post: boolean;
      title: string;
    } => {
      const filePath = path.join(root, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const { date, show_post, title } = data;
      return { filename, date, show_post, title };
    })
    // filter out all the incomplete posts
    .filter(({ show_post }) => {
      // FLIP ME!!
      // return show_post;
      return !show_post;
    })
    // sort the posts - newest first
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  // create an array of what posts are prev and next
  const prevAndNextInfo = allFilteredPaths.map(({ filename }, i, arr) => ({
    previousPost: arr[i + 1]?.title,
    nextPost: arr[i - 1]?.title,
    currentPost: filename.slice(14, -3),
  }));

  // convert info to JSON string
  const prevAndNextInfoString = JSON.stringify(prevAndNextInfo);
  // save that info into a file, so it can be used later
  fs.writeFileSync(root + "/blogposts.json", prevAndNextInfoString);

  // create an array of paths with params object for NextJS' getStaticProps
  const paths = allFilteredPaths.map(({ filename }) => ({
    params: { blogTitle: filename.slice(14, -3) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { blogTitle } = ctx.params;
  const title = blogTitle.toString().toLowerCase();

  // get root path
  const root = path.join(process.cwd());

  // get the content and frontmatter data from the current post
  const mark = await import(`content/posts/${title}.md`);
  const { data, content } = matter(mark.default);

  // get the post file
  const postsString = fs.readFileSync(root + "/blogposts.json");
  const allPosts = JSON.parse(postsString.toString());
  const { previousPost, nextPost } = allPosts.find(
    post => post.currentPost === title
  );

  return {
    props: {
      data,
      content,
      previousPostTitle: previousPost || null,
      nextPostTitle: nextPost || null,
    },
  };
};
