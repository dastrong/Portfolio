import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

type PageHeadProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  ogType?: string;
};

const url = "https://www.danielstrong.tech";

export default function PageHead({
  children,
  title = "Daniel Strong",
  description,
  image = "/favicon.png",
  imageAlt = "Daniel Strong Tech",
  ogType = "website",
}: PageHeadProps) {
  const { colors } = useTheme();
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="lqEy-SYpFRPj_h-cShxJuEz1PrdnDfR9nWkjsOMm11g"
        />
        <link rel="canonical" href={url + asPath} />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={url + image} />
        <meta property="og:url" content={url + asPath} />
        <meta property="og:site_name" content="Daniel Strong" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url + image} />
        <meta name="twitter:image:alt" content={imageAlt} />
        <meta name="twitter:creator" content="@DaStrongWon" />
        <meta name="theme-color" content={colors.background.main} />
      </Head>

      {children}
    </>
  );
}
