import React from "react";
import styled from "styled-components";
import { LogoBig } from "../components/_svgs";

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.pink};
`;

const StyledText2 = styled.p`
  ${({ theme }) => theme.centered}
`;

export default function Index() {
  return (
    <div>
      <StyledText>Hellooooo</StyledText>
      <StyledText2>Hellooooo</StyledText2>
      <LogoBig />
    </div>
  );
}
