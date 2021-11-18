import React from "react";
import styled from "styled-components";

import InterLink from "components/Shared/Links";
import PageHead from "components/Shared/PageHead";
import { StyledButton } from "components/Shared/StyledButton";
import { StyledHeader } from "components/Shared/StyledHeader";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";

const StyledDescription = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 500px;
`;

const StyledAnchor = styled(StyledButton)`
  width: 225px;

  &:first-child {
    margin-right: 0.5rem;
  }
`;

export default function PageNotFound() {
  return (
    <PageHead
      title="Page Not Found"
      description="Couldn't find the page you were looking for."
    >
      <StyledHeader underlined>404</StyledHeader>

      <StyledTextContainer>
        <StyledDescription>
          Sorry, that page could not be found.
        </StyledDescription>

        <StyledButtonGroup>
          <InterLink primary href="/" StyledAnchor={StyledAnchor}>
            Go Home
          </InterLink>
          <InterLink href="/contact" StyledAnchor={StyledAnchor}>
            Report Error
          </InterLink>
        </StyledButtonGroup>
      </StyledTextContainer>
    </PageHead>
  );
}
