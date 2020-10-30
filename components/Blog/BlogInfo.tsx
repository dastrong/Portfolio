import React from "react";
import OptimizedImage from "components/Shared/OptimizedImage";
import * as Styled from "./BlogInfo.styles";
import { formatDate } from "utils";

export default function BlogInfo({ date }: { date: Date }) {
  return (
    <Styled.Container>
      <OptimizedImage
        imgFile="misc_avatar(357x357).jpg"
        alt="daniel avatar"
        containerStyles={Styled.Image}
      />

      <div>
        <Styled.Name>Daniel Strong</Styled.Name>

        <Styled.Date>{formatDate(date)}</Styled.Date>
      </div>
    </Styled.Container>
  );
}
