import React from "react";
import styled from "styled-components";
import { Img } from "react-optimized-image";
import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <OptimizedImage
        imgFile="misc_homeportrait.webp"
        alt="Daniel Strong"
        containerStyles={Styled.Headshot}
      >
        <StyledImage
          src={require(`images/misc_homeportrait.webp`)}
          sizes={[300, 500]}
          breakpoints={[350]}
        />
      </OptimizedImage>
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>

      <HomeMobileActions />
    </Styled.CenterContainer>
  );
}
