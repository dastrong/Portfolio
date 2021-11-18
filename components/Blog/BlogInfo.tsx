import React from "react";
import Image from "next/image";
import { useTheme } from "styled-components";

import { formatDate } from "utils/formatDate";
import { getShimmerDataURL } from "utils/getShimmerDataURL";
import * as Styled from "./BlogInfo.styles";

const thumbnailSize = 45;

export default function BlogInfo({
  date,
  thumbnail_img_file,
}: {
  date: string;
  thumbnail_img_file: string;
}) {
  const { colors } = useTheme();
  const shimmerDataURL = getShimmerDataURL(
    thumbnailSize,
    thumbnailSize,
    colors.background.main,
    colors.accent
  );

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image
          alt="Daniel Thumbnail"
          placeholder="blur"
          src={`/Portfolio/${thumbnail_img_file}`}
          blurDataURL={shimmerDataURL}
          layout="fill"
          sizes={`${thumbnailSize}px`}
          objectFit="contain"
        />
      </Styled.ImageWrapper>

      <div>
        <Styled.Name>Daniel Strong</Styled.Name>

        <Styled.Date>{formatDate(date)}</Styled.Date>
      </div>
    </Styled.Container>
  );
}
