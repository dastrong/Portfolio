import React from "react";
import { internalLinks } from "utils/links";
import InterLink from "components/Shared/Links";
import * as Styled from "./FooterLinks.styles";

export default function FooterLinks() {
  return (
    <Styled.Container>
      {internalLinks.map(({ href, text }) => (
        <Styled.Item key={href}>
          <InterLink isMenuOpen href={href} StyledAnchor={Styled.Text}>
            {text}
          </InterLink>
        </Styled.Item>
      ))}
    </Styled.Container>
  );
}
