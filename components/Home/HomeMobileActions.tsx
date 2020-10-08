import React from "react";
import InterLink from "components/Shared/Links";
import * as Styled from "./HomeMobileActions.styles";
import useEnterAnimation from "hooks/useEnterAnimation";

export default function HomeMobileActions() {
  const [ref, inView] = useEnterAnimation();

  return (
    <Styled.Container ref={ref}>
      <InterLink
        primary
        href="/work"
        StyledAnchor={Styled.Anchor}
        inView={inView}
        direction="toRight"
      >
        View Work
      </InterLink>
      <InterLink
        href="/contact"
        StyledAnchor={Styled.Anchor}
        inView={inView}
        direction="toLeft"
      >
        Contact
      </InterLink>
    </Styled.Container>
  );
}
