import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import { BlogCard } from "components/Shared/Cards";
import { BlogTypes } from "components/Blog/BlogTypes";

export default function Blog({ posts }: { posts: BlogTypes[] }) {
  return (
    <>
      <PageHead
        title="Blog"
        description="Come and join me in learning new and useful things in web development."
      />

      <Header>Blog Posts</Header>

      {posts.map(post => (
        <BlogCard key={post.title} {...post} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get root path
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const blog = await import(".forestry/front_matter/templates/post.yml");
  const allPostPaths = matter(blog.default).data.pages;

  // create an array of all work content
  const allPostsContent = allPostPaths.map((filename: string) => {
    const filePath = path.join(root, filename);
    const routeName = filename.slice(13, -3);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { ...data, routeName };
  });

  return {
    props: {
      posts: allPostsContent,
    },
  };
};
