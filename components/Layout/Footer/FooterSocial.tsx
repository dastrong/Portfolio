import React from "react";
import { externalLinks } from "utils/links";
import GradientContainer from "components/Shared/GradientContainer";
import * as Styled from "./FooterSocial.styles";

export default function LinkSocial() {
  return (
    <GradientContainer
      isStatic
      containerStyles={Styled.SocialContainer}
      contentStyles={Styled.ContentContainer}
    >
      {externalLinks.map(({ SquareIcon, href, text }) => (
        <Styled.SocialIcon
          key={href}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={text}
        >
          <SquareIcon size="30" />
        </Styled.SocialIcon>
      ))}
    </GradientContainer>
  );
}
