import React from "react";
import styled from "styled-components";
import { Img } from "react-optimized-image";
import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import * as Styled from "./BlogInfo.styles";
import { formatDate } from "utils";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

export default function BlogInfo({ date }: { date: Date }) {
  return (
    <Styled.Container>
      <OptimizedImage
        imgFile="misc_blogme.jpg"
        alt="daniel avatar"
        containerStyles={Styled.Image}
      >
        <StyledImage src={require(`images/misc_blogme.jpg`)} sizes={[45]} />
      </OptimizedImage>

      <div>
        <Styled.Name>Daniel Strong</Styled.Name>

        <Styled.Date>{formatDate(date)}</Styled.Date>
      </div>
    </Styled.Container>
  );
}
