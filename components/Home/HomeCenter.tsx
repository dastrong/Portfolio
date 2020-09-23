import React from "react";
import OptimizedImage from "components/Shared/OptimizedImage";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <OptimizedImage
        imgFile="aboutme_w672_h1026.jpg"
        alt="Daniel Strong"
        containerStyles={Styled.Headshot}
      />
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>
    </Styled.CenterContainer>
  );
}
