import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

type PageHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  twitterCard?: string;
};

export default function PageHead({
  title,
  description,
  image,
  imageAlt,
  twitterCard,
}: PageHeadProps) {
  const { pathname } = useRouter();
  const { colors } = useTheme();

  const isBlogPost = pathname.startsWith("/blog/");

  return (
    <Head>
      <title>{`${title ? title + " | " : ""}`} Daniel Strong</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://www.danielstrong.tech/" />
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content={`https://www.danielstrong.tech${pathname}`}
      />
      <meta property="og:site_name" content="Daniel Strong Tech" />
      <meta name="twitter:card" content={twitterCard || "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:creator" content="@DaStrongWon" />
      <meta name="theme-color" content={colors.background.main} />
    </Head>
  );
}
