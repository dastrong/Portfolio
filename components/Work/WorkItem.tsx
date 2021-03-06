import React from "react";
import styled from "styled-components";
import { Img } from "react-optimized-image";
import { FaExternalLinkAlt } from "react-icons/fa";

import useEnterAnimation from "hooks/useEnterAnimation";
import GradientContainer from "components/Shared/GradientContainer";
import InterLink from "components/Shared/Links";
import OptimizedImage, { HQstyles } from "components/Shared/OptimizedImage";

import { WorkTypes } from "./WorkTypes";
import * as Styled from "./WorkItem.styles";

const StyledImage = styled(Img)`
  ${HQstyles}
`;

export default function WorkItem({
  description,
  image,
  links,
  show_work,
  site_name,
  routeName,
}: WorkTypes & { routeName?: string }) {
  const [ref, inView, skipAnimation] = useEnterAnimation(true);

  if (!show_work) return null;

  return (
    <GradientContainer
      ref={ref}
      inView={inView}
      skipAnimation={skipAnimation}
      containerStyles={Styled.ItemContainer}
      contentStyles={Styled.ItemContent}
    >
      <OptimizedImage
        imgFile={image}
        alt={routeName}
        containerStyles={Styled.Image}
      >
        <StyledImage
          webp
          src={require(`images/work_${image.substring(5)}`)}
          sizes={[450, 615, 350]}
          breakpoints={[500, 767]}
        />
      </OptimizedImage>

      <Styled.Content>
        <Styled.TextContent>
          <Styled.Title>
            {site_name}

            <Styled.ExternalLink href={links.live} target="_blank">
              <FaExternalLinkAlt size="17" />
            </Styled.ExternalLink>
          </Styled.Title>

          <Styled.Description>{description}</Styled.Description>
        </Styled.TextContent>

        <Styled.ButtonGroup>
          <InterLink
            href="/work/[workName]"
            as={`/work/${routeName}`}
            StyledAnchor={Styled.Button}
            primary
          >
            Read More
          </InterLink>
          {links.github ? (
            <Styled.Button href={links.github} target="_blank">
              View Source
            </Styled.Button>
          ) : (
            <InterLink href="/contact" StyledAnchor={Styled.Button}>
              Source Inquiry
            </InterLink>
          )}
        </Styled.ButtonGroup>
      </Styled.Content>
    </GradientContainer>
  );
}
