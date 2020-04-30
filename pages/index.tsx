import React from "react";
import PageHead from "components/Shared/PageHead";
import GradientContainer from "components/Shared/GradientContainer";

export default function Index() {
  return (
    <>
      <PageHead
        title="Home"
        description="Please reach out to me regarding potential employment or contract work here."
      />

      <div>
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
    </>
  );
}
