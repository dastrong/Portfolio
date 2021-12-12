import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

type PageHeadProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
};

const URL = "https://www.danielstrong.tech";

export default function PageHead({
  children,
  title = "Daniel Strong",
  description,
  ogImage = encodeURI(
    `${URL}/api/og-image?type=default&title=Daniel Strong&heading=Come get to know`
  ),
  ogImageAlt = "Daniel Strong Social Media Banner",
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
        <link rel="canonical" href={URL + asPath} />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:url" content={URL + asPath} />
        <meta property="og:site_name" content="Daniel Strong" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />
        <meta name="twitter:creator" content="@DaStrongWon" />
        <meta name="theme-color" content={colors.background.main} />
      </Head>

      {children}
    </>
  );
}
