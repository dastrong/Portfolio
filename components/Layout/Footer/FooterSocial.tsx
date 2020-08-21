import React from "react";
import { externalLinks } from "utils";
import GradientContainer from "components/Shared/GradientContainer";
import * as Styled from "./FooterSocial.styles";

export default function LinkSocial() {
  return (
    <GradientContainer
      isStatic
      containerStyles={Styled.SocialContainer}
      contentStyles={Styled.ContentContainer}
    >
      {externalLinks.map(({ SquareIcon, href }) => (
        <Styled.SocialIcon
          key={href}
          href={href}
          target="_blank"
          rel="noopener"
        >
          <SquareIcon size="30" />
        </Styled.SocialIcon>
      ))}
    </GradientContainer>
  );
}
