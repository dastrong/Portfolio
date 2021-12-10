import React from "react";
import { useTheme } from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

import useEnterAnimation from "hooks/useEnterAnimation";
import { getShimmerDataURL } from "utils/getShimmerDataURL";
import { formatTitleToFile } from "utils/formatTitleToFile";
import GradientContainer from "components/Shared/GradientContainer";
import InterLink from "components/Shared/Links";

import type { WorkTypes } from "./Work.types";
import * as Styled from "./WorkItem.styles";

export default function WorkItem({
  description,
  img_file,
  links,
  show_work,
  site_name,
  featured = false,
}: WorkTypes & { featured?: boolean }) {
  const [ref, inView, skipAnimation] = useEnterAnimation(featured);

  const { colors } = useTheme();
  const shimmerDataURL = getShimmerDataURL(
    1000,
    487,
    colors.background.main,
    colors.accent
  );

  if (!show_work) return null;

  return (
    <GradientContainer
      ref={ref}
      inView={inView || featured}
      skipAnimation={skipAnimation}
      containerStyles={Styled.ItemContainer}
      contentStyles={Styled.ItemContent}
      isStatic={featured}
    >
      <Styled.ImageWrapper>
        <Styled.Image
          priority={featured}
          src={img_file}
          alt={site_name + " mockup"}
          height={487}
          width={1000}
          sizes="(max-width: 400px) 350px, (max-width: 767px) 550px, 350px"
          layout="responsive"
          placeholder="blur"
          blurDataURL={shimmerDataURL}
        />
      </Styled.ImageWrapper>

      <Styled.Content>
        <Styled.TextContent>
          <Styled.Title>
            {site_name}

            <Styled.ExternalLink
              href={links.live}
              target="_blank"
              rel="noopener"
              aria-label={`Visit ${site_name}`}
            >
              <FaExternalLinkAlt size="17" />
            </Styled.ExternalLink>
          </Styled.Title>

          <Styled.Description>{description}</Styled.Description>
        </Styled.TextContent>

        <Styled.ButtonGroup>
          <InterLink
            primary
            href={`/work/${formatTitleToFile(site_name)}`}
            StyledAnchor={Styled.Button}
            aria-label={`Further ${site_name} Information`}
          >
            Read More
          </InterLink>
          {links.github ? (
            <Styled.Button
              href={links.github}
              target="_blank"
              rel="noopener"
              aria-label={`${site_name} GitHub Repository`}
            >
              View Source
            </Styled.Button>
          ) : (
            <InterLink
              href="/contact"
              StyledAnchor={Styled.Button}
              aria-label={`${site_name} Source Code Inquiry`}
            >
              Source Inquiry
            </InterLink>
          )}
        </Styled.ButtonGroup>
      </Styled.Content>
    </GradientContainer>
  );
}
