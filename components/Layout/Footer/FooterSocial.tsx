import React from "react";
import { externalLinks } from "utils";
import GradientContainer from "components/Shared/GradientContainer";
import * as Styled from "./FooterSocial.styles";

export default function LinkSocial() {
  return (
    <Styled.SocialContainer>
      <GradientContainer isStatic>
        <Styled.ContentContainer>
          {externalLinks.map(({ Icon, href }) => (
            <Styled.SocialIcon
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
            >
              <Icon size="30" />
            </Styled.SocialIcon>
          ))}
        </Styled.ContentContainer>
      </GradientContainer>
    </Styled.SocialContainer>
  );
}
