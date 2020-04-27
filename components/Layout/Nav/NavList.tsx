import React from "react";
import { internalLinks } from "utils";
import InterLink from "components/Shared/Links";
import { StyledLinkText } from "components/Shared/StyledLinkText";
import * as Styled from "./NavList.styles";

export default function NavList({
  isMenuOpen,
  isMobile,
}: {
  isMenuOpen?: boolean;
  isMobile?: boolean;
}) {
  return (
    <Styled.List>
      {internalLinks.map(({ text, href }, index) => (
        <Styled.ListItem key={text}>
          <InterLink
            href={href}
            StyledAnchor={StyledLinkText}
            isMenuOpen={isMenuOpen}
            index={index}
          >
            {text}
          </InterLink>

          {isMobile && <Styled.Divider index={index} isMenuOpen={isMenuOpen} />}
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
}
