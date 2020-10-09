import React from "react";
import OptimizedImage from "components/Shared/OptimizedImage";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <OptimizedImage
        imgFile="about_me(672x1026)_w672_h1026.jpg"
        alt="Daniel Strong"
        containerStyles={Styled.Headshot}
      />
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>

      <HomeMobileActions />
    </Styled.CenterContainer>
  );
}
