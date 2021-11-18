import React from "react";
import { formatDate } from "utils/formatDate";
import * as Styled from "./BlogInfo.styles";

export default function BlogInfo({ date }: { date: string }) {
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Styled.Image
          src="Portfolio/_blogavatar.jpg"
          alt="daniel avatar"
          height={45}
          width={45}
        />
      </Styled.ImageWrapper>

      <div>
        <Styled.Name>Daniel Strong</Styled.Name>

        <Styled.Date>{formatDate(date)}</Styled.Date>
      </div>
    </Styled.Container>
  );
}
