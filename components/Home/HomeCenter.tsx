import React from "react";
import styled from "styled-components";
import { Img } from "react-optimized-image";
import { useInView } from "react-intersection-observer";

import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

export default function HomeCenter() {
  const [headerRef, headerInView] = useInView();
  const [descriptionRef, descriptionInView] = useInView();

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

      <Styled.NameHeader ref={headerRef} inView={headerInView}>
        Daniel Strong
      </Styled.NameHeader>

      <Styled.JobDescription ref={descriptionRef} inView={descriptionInView}>
        Full Stack Developer
      </Styled.JobDescription>

      <HomeMobileActions />
    </Styled.CenterContainer>
  );
}
