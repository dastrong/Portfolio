import React from "react";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter() {
  return (
    <Styled.CenterContainer>
      <Styled.Headshot src="/aboutme.jpg" />
      <Styled.NameHeader>Daniel Strong</Styled.NameHeader>
      <Styled.JobDescription>Full Stack Developer</Styled.JobDescription>
    </Styled.CenterContainer>
  );
}
