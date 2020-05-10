import React from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import styled, { StyledComponent, DefaultTheme } from "styled-components";

type LinkTypes = {
  isCurrentPage?: boolean;
  isMenuOpen?: boolean;
  index?: number;
  primary?: boolean;
};

// used as a default Component if none is passed to InterLink
// and a wrapper to access the LinkTypes in other styled components
export const PlainLink = styled.a<LinkTypes>``;

// links to another page in our app (internally)
export default function InterLink({
  children,
  StyledAnchor = PlainLink,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  ...anchorProps
}: {
  children: React.ReactNode;
  StyledAnchor?: StyledComponent<"a", DefaultTheme, LinkTypes, never>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  LinkTypes) {
  // these are the accepted props for next/link
  const linkProps = { href, as, replace, scroll, shallow, passHref, prefetch };

  // allows any StyledAnchor parent to access isCurrentPage ...
  // ... to see if the link is the active page
  const { pathname } = useRouter();
  const isCurrentPage = pathname === href;

  return (
    <Link passHref={passHref} {...linkProps}>
      <StyledAnchor isCurrentPage={isCurrentPage} {...anchorProps}>
        {children}
      </StyledAnchor>
    </Link>
  );
}
