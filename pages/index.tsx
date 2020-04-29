import React from "react";
import GradientContainer from "components/Shared/GradientContainer";
import PageHead from "components/Shared/PageHead";

export default function Index() {
  return (
    <div>
      <PageHead title="Home" />

      <GradientContainer>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </GradientContainer>

      <GradientContainer isStatic>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </GradientContainer>
    </div>
  );
}
