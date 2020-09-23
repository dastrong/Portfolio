import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import Tags from "components/Shared/Tags";
import BlogInfo from "components/Blog/BlogInfo";
import BlogMarkdown from "components/Blog/BlogMarkdown";
import { BlogTypes } from "components/Blog/BlogTypes";

export default function ViewBlog({
  data,
  content,
}: {
  data: BlogTypes;
  content: string;
}) {
  const { date, tags, title } = data;

  return (
    <>
      <PageHead
        title={`${title} | My Blog`}
        // description=""
      />

      <Header>{title}</Header>

      <BlogInfo date={date} />

      <BlogMarkdown content={content} />

      <Tags tags={tags} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const blogPosts = await import(".forestry/front_matter/templates/post.yml");

  const allBlogPostPaths = matter(blogPosts.default).data.pages;

  // create an array of all completed work
  const allFilteredPaths = allBlogPostPaths.filter((filename: string) => {
    const filePath = path.join(root, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    // FLIP ME!!
    // return data.show_post;
    return !data.show_post;
  });

  const paths = allFilteredPaths.map((path: string) => ({
    params: { blogTitle: path.slice(14, -3) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { blogTitle } = ctx.params;
  const title = blogTitle.toString().toLowerCase();
  const mark = await import(`content/posts/${title}.md`);
  const { data, content } = matter(mark.default);
  return { props: { data, content } };
};
