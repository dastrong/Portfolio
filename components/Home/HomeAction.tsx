import React from "react";
import InterLink from "components/Shared/Links";
import * as Styled from "./HomeAction.styles";

export default function HomeAction() {
  return (
    <Styled.Container>
      <InterLink primary href="/work" StyledAnchor={Styled.Anchor}>
        View Work
      </InterLink>
      <InterLink href="/contact" StyledAnchor={Styled.Anchor}>
        Contact
      </InterLink>
    </Styled.Container>
  );
}
