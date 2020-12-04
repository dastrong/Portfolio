import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

type PageHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

const url = "https://www.danielstrong.tech";

export default function PageHead({
  title,
  description,
  image = "/favicon.png",
  imageAlt = "Daniel Strong",
}: PageHeadProps) {
  const { asPath } = useRouter();
  const { colors } = useTheme();

  const isBlogPost = asPath.startsWith("/blog/");

  return (
    <Head>
      <title>{`${title ? title + " | " : ""}`} Daniel Strong</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url + image} />
      <meta property="og:url" content={url + asPath} />
      <meta property="og:site_name" content="Daniel Strong Tech" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url + image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:creator" content="@DaStrongWon" />
      <meta name="theme-color" content={colors.background.main} />
    </Head>
  );
}
