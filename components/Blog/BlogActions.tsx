import React from "react";
import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import InterLink from "components/Shared/Links";
import useEnterAnimation from "hooks/useEnterAnimation";
import * as Styled from "./BlogActions.styles";

const StyledLeftArrow = styled(FaArrowCircleLeft)`
  ${Styled.Arrow}
  margin-right: 0.5rem;
`;

const StyledRightArrow = styled(FaArrowCircleRight)`
  ${Styled.Arrow}
  margin-left: 0.5rem;
`;

export default function BlogActions({
  previousPostTitle,
  nextPostTitle,
}: {
  previousPostTitle?: string;
  nextPostTitle?: string;
}) {
  const [ref, inView] = useEnterAnimation();

  return (
    <Styled.Container ref={ref}>
      {previousPostTitle && (
        <InterLink
          href="/blog/[blogTitle]"
          as={"/blog/" + previousPostTitle.split(" ").join("").toLowerCase()}
          StyledAnchor={Styled.Link}
          inView={inView}
          direction="toLeft"
        >
          <StyledLeftArrow size="40" />

          <Styled.TextContainer align="left">
            <Styled.Header>Past Post</Styled.Header>
            <Styled.Title>{previousPostTitle}</Styled.Title>
          </Styled.TextContainer>
        </InterLink>
      )}

      {nextPostTitle && (
        <InterLink
          href="/blog/[blogTitle]"
          as={"/blog/" + nextPostTitle.split(" ").join("").toLowerCase()}
          StyledAnchor={Styled.Link}
          inView={inView}
          direction="toRight"
        >
          <Styled.TextContainer align="right">
            <Styled.Header>Next Post</Styled.Header>
            <Styled.Title>{nextPostTitle}</Styled.Title>
          </Styled.TextContainer>

          <StyledRightArrow size="40" />
        </InterLink>
      )}
    </Styled.Container>
  );
}
