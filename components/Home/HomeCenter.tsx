import React from "react";
import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import { Img } from "react-optimized-image";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";
import styled from "styled-components";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <OptimizedImage
        imgFile="home_portrait(2100x2716).webp"
        alt="Daniel Strong"
        containerStyles={Styled.Headshot}
      >
        <StyledImage
          src={require(`images/home_portrait(2100x2716).webp`)}
          sizes={[300, 500]}
          breakpoints={[450, 768, 1000]}
        />
      </OptimizedImage>
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>

      <HomeMobileActions />
    </Styled.CenterContainer>
  );
}
