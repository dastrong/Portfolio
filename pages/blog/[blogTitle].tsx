import React from "react";
import fs from "fs";
import path from "path";
import type { InferGetStaticPropsType, GetStaticPaths } from "next";
import matter from "gray-matter";
import styled, { css } from "styled-components";
import probe from "probe-image-size";

import { formatDate } from "utils/formatDate";
import PageHead from "components/Shared/PageHead";
import Tags from "components/Shared/Tags";
import { StyledHeader } from "components/Shared/StyledHeader";

import BlogContextProvider from "components/Blog/BlogContext";
import type { ProbedImageType } from "components/Blog/BlogContext";
import BlogActions from "components/Blog/BlogActions";
import BlogInfo from "components/Blog/BlogInfo";
import { Blockquote } from "components/Blog/BlogMarkdown.styles";
import type { BlogTypes } from "components/Blog/Blog.types";
import BlogMarkdown from "components/Blog/BlogMarkdown";

import dynamic from "next/dynamic";
const BlogShare = dynamic(() => import("components/Blog/BlogShare"));

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
  title,
  description,
  date_publish,
  date_update,
  tags,
  postContent,
  previousPostTitle,
  nextPostTitle,
  thumbnail_img_file,
  images,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageHead title={`${title} | Blog`} description={description}>
      <StyledHeader>{title}</StyledHeader>

      <BlogInfo date={date_publish} thumbnail_img_file={thumbnail_img_file} />

      <Tags small tags={tags} addContainerStyles={StyledTags} />

      {date_update && (
        <StyledNotificationBox>
          This post was updated on:
          <br />
          {formatDate(date_update)}
        </StyledNotificationBox>
      )}

      <BlogContextProvider value={images}>
        <BlogMarkdown content={postContent} />
      </BlogContextProvider>

      <BlogActions
        previousPostTitle={previousPostTitle}
        nextPostTitle={nextPostTitle}
      />

      <BlogShare />
    </PageHead>
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
    .map(
      (
        filename: string
      ): {
        filename: string;
        date_publish: string;
        show_post: boolean;
        title: string;
      } => {
        const filePath = path.join(root, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        const { date_publish, show_post, title } = data;
        return { filename, date_publish, show_post, title };
      }
    )
    // filter out all the incomplete posts
    .filter(({ show_post }) => show_post)
    // sort the posts - newest first
    .sort((a, b) => Date.parse(b.date_publish) - Date.parse(a.date_publish));

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

export const getStaticProps = async ctx => {
  const { blogTitle: title } = ctx.params;

  // get root path
  const root = path.join(process.cwd());

  // get the thumbnail image for posts
  const blogMark = await import("content/pages/blog.md");
  const blogMatter = matter(blogMark.default);
  const thumbnail_img_file = blogMatter.data.thumbnail_img_file as string;

  // get the content and frontmatter data from the current post
  const postMark = await import(`content/posts/${title}.md`);
  const postMatter = matter(postMark.default);
  const postData = postMatter.data as BlogTypes;

  const { internal_images, external_images } = postData;
  const cloud_url = process.env.CLOUD_URL;
  const internalImageUrls = internal_images.map(file => cloud_url + file);

  const internalImages = await Promise.all<ProbedImageType>(
    internalImageUrls.map(probe)
  ).then(imgs =>
    imgs.map(({ height, width, url }) => ({ height, width, url }))
  );
  const externalImages = await Promise.all<ProbedImageType>(
    external_images.map(probe)
  ).then(imgs =>
    imgs.map(({ height, width, url }) => ({ height, width, url }))
  );
  const images = { internalImages, externalImages };

  // get the post file
  const postsString = fs.readFileSync(root + "/blogposts.json");
  const allPosts = JSON.parse(postsString.toString());
  const { previousPost, nextPost } = allPosts.find(
    post => post.currentPost === title
  );

  return {
    props: {
      ...postData,
      postContent: postMatter.content,
      previousPostTitle: previousPost || null,
      nextPostTitle: nextPost || null,
      thumbnail_img_file,
      images,
    },
  };
};
