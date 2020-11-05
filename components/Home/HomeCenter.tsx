import React from "react";
import OptimizedImage from "components/Shared/OptimizedImage";
import { Img } from "react-optimized-image";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <OptimizedImage
        imgFile="home_portrait(2100x2716).webp"
        alt="Daniel Strong"
        containerStyles={Styled.Headshot}
      >
        <Img src={require(`images/home_portrait(2100x2716).webp`)} />
      </OptimizedImage>
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>

      <HomeMobileActions />
    </Styled.CenterContainer>
  );
}
