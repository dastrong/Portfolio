import React from "react";
import PageHead from "components/Shared/PageHead";
import GradientContainer from "components/Shared/GradientContainer";

import HomeCornerLinks from "components/Home/HomeCornerLinks";
import HomeCenter from "components/Home/HomeCenter";
import HomeAction from "components/Home/HomeAction";
import * as Styled from "components/Home/Home.styles";
import { gradientWidth } from "components/Home/_variables";

export default function Home() {
  return (
    <>
      <PageHead
        title="Home"
        description="Please reach out to me regarding potential employment or contract work here."
      />

      <GradientContainer
        isStatic
        containerStyles={Styled.GradientContainerStyles}
        contentStyles={Styled.ContentStyles}
        gradientWidth={gradientWidth}
      >
        <HomeCornerLinks />
        <HomeCenter />
        <HomeAction />
      </GradientContainer>
    </>
  );
}
