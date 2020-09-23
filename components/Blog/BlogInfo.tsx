import React from "react";
import OptimizedImage from "components/Shared/OptimizedImage";
import DateWithOrdinal from "components/Shared/DateWithOrdinal";
import * as Styled from "./BlogInfo.styles";

export default function BlogInfo({ date }: { date: Date }) {
  return (
    <Styled.Container>
      <OptimizedImage
        imgFile="avatar_w357_h357.jpg"
        alt="daniel avatar"
        containerStyles={Styled.Image}
      />

      <div>
        <Styled.Name>Daniel Strong</Styled.Name>

        <Styled.Date>
          <DateWithOrdinal date={date} />
        </Styled.Date>
      </div>
    </Styled.Container>
  );
}
