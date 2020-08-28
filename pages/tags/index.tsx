import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import { useRouter } from "next/router";

const getTags = (arr, tagName: string) =>
  arr.reduce((acc: string[], cVal) => [...acc, ...cVal[tagName]], []);

export default function TagsPage({
  posts,
  works,
}: {
  posts: string[];
  works: string[];
}) {
  // use the router object to grab the query object for displaying certain tag related content
  const router = useRouter();

  // filter results by this query
  const [query, setQuery] = useState("");

  // used to filter tags and content
  const [showWorks, setShowWorks] = useState(true);
  const [showPosts, setShowPosts] = useState(true);

  // grabbing all tags for each data type
  const allPostsTags = getTags(posts, "tags");
  const allWorksTags = getTags(works, "tech_used");

  // this will hold all our tags to show the user
  const [tags, setTags] = useState(getUniqueAndSortedTags());

  // if there's a query in the url, update the query search value
  useEffect(() => {
    console.log("query updated: ", router.query.q);
    setQuery(router.query.q?.toString() || "");
  }, [router.query.q]);

  // if the user doesn't want to see certain data types, ...
  // ... we will hide their tags from the list here
  useEffect(() => {
    setTags(getUniqueAndSortedTags());
  }, [showWorks, showPosts]);

  // get and sorted all our unique tags into one array
  function getUniqueAndSortedTags() {
    return Array.from(
      new Set([
        ...(showPosts ? allPostsTags : []),
        ...(showWorks ? allWorksTags : []),
      ])
    ).sort();
  }

  return (
    <>
      <PageHead
        title="Tags"
        description="View my blog or work by the technology used"
      />

      <Header>Tags</Header>

      {/* show/hide work/posts buttons */}

      {/* show all available tags here */}
      {tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}

      {/* Show work or posts related that use the chosen tag */}
      {showWorks &&
        works.map(work => {
          if (query && !work.tech_used.includes(query)) return null;
          return <div key={work.site_name}>{work.site_name}</div>;
        })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const root = path.join(process.cwd());

  // get the filenames (add to root)
  const postFrontMatter = await import(
    ".forestry/front_matter/templates/post.yml"
  );
  const workFrontMatter = await import(
    ".forestry/front_matter/templates/work.yml"
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
    .filter(post => {
      // FLIP ME!!
      return !post.show_post;
    });
  // create an array of all completed posts
  const allWorks = allWorkPaths
    .map((filename: string) => {
      const filePath = path.join(root, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data;
    })
    .filter(work => work.show_work);

  return {
    props: {
      works: allWorks,
      posts: allPosts,
    },
  };
};
