import React from "react";
import PageHead from "components/Shared/PageHead";
import GradientContainer from "components/Shared/GradientContainer";

import HomeCornerLinks from "components/Home/HomeCornerLinks";
import HomeCenter from "components/Home/HomeCenter";
import * as Styled from "components/Home/Home.styles";
import { gradientWidth } from "components/Home/_variables";

export default function Home() {
  return (
    <PageHead
      title="Home"
      description="Work Portfolio and Blog. I'm a Full Stack Developer and Designer who simply loves to code."
    >
      <GradientContainer
        isStatic
        containerStyles={Styled.GradientContainerStyles}
        contentStyles={Styled.ContentStyles}
        gradientWidth={gradientWidth}
      >
        <HomeCornerLinks />
        <HomeCenter />
      </GradientContainer>
    </PageHead>
  );
}
