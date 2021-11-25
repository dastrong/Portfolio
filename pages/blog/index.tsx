import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import { BlogCard } from "components/Shared/Cards";
import { StyledHeader } from "components/Shared/StyledHeader";
import type { BlogTypes } from "components/Blog/Blog.types";

export default function Blog({ posts }: { posts: BlogTypes[] }) {
  return (
    <PageHead
      title="Daniel Strong's Blog"
      description="Join me in learning new, useful, and interesting things in web development."
    >
      <StyledHeader underlined>Blog Posts</StyledHeader>

      {posts.map(post => (
        <BlogCard key={post.title} {...post} />
      ))}
    </PageHead>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const blog = await import(".forestry/front_matter/templates/blog-post.yml");
  const allPostPaths = matter(blog.default).data.pages;

  // create an array of all work content
  const allPostsContent = allPostPaths
    .map((filename: string) => {
      const filePath = path.join(root, filename);
      const routeName = filename.slice(13, -3);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { ...data, routeName };
    })
    // filter out all the incomplete posts
    .filter(({ show_post }) => show_post)
    // sort the posts - newest first
    .sort(
      (a: BlogTypes, b: BlogTypes) =>
        Date.parse(b.date_publish) - Date.parse(a.date_publish)
    );

  return {
    props: {
      posts: allPostsContent,
    },
  };
};
