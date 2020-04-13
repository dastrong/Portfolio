import React from "react";
import GradientContainer from "../components/GradientContainer";

export default function Index() {
  return (
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
  );
}
