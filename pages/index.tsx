import React from "react";
import type { InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import GradientContainer from "components/Shared/GradientContainer";
import HomeCornerLinks from "components/Home/HomeCornerLinks";
import HomeCenter from "components/Home/HomeCenter";
import * as Styled from "components/Home/Home.styles";
import { gradientWidth } from "components/Home/_variables";

export default function Home({
  image,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageHead
      title="Home"
      description="Work Portfolio and Blog. I'm a Full Stack Developer and Designer who simply loves to code."
    >
      <GradientContainer
        isStatic
        containerStyles={Styled.GradientContainerStyles}
        contentStyles={Styled.ContentStyles}
        gradientWidth={gradientWidth}
      >
        <HomeCornerLinks />
        <HomeCenter image={image} />
      </GradientContainer>
    </PageHead>
  );
}

export const getStaticProps = async () => {
  const homeMark = await import("content/pages/home.md");
  const homeMatter = matter(homeMark.default);
  const img_file = homeMatter.data.headshot_img_file as string;

  const {
    base64,
    img: { width, height },
  } = await getPlaiceholder(process.env.CLOUD_URL + img_file, {
    size: 64,
  });

  return {
    props: {
      image: {
        width,
        height,
        base64,
        img_file,
      },
    },
  };
};
