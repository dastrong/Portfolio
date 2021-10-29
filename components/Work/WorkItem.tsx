import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import useEnterAnimation from "hooks/useEnterAnimation";
import GradientContainer from "components/Shared/GradientContainer";
import InterLink from "components/Shared/Links";

import { WorkTypes } from "./WorkTypes";
import * as Styled from "./WorkItem.styles";

export default function WorkItem({
  description,
  image,
  links,
  show_work,
  site_name,
  routeName,
  priority,
}: WorkTypes & { routeName?: string; priority: boolean }) {
  const [ref, inView, skipAnimation] = useEnterAnimation(true);

  if (!show_work) return null;

  return (
    <GradientContainer
      ref={ref}
      inView={inView || priority}
      skipAnimation={skipAnimation}
      containerStyles={Styled.ItemContainer}
      contentStyles={Styled.ItemContent}
    >
      <Styled.ImageWrapper>
        <Styled.Image
          priority={priority}
          src={`Portfolio/${image}`}
          alt={routeName}
          height={487}
          width={1000}
          sizes="(max-width: 400px) 350px, (max-width: 767px) 550px, 350px"
          layout="responsive"
          placeholder={priority ? "empty" : "blur"}
          blurDataURL={`https://res.cloudinary.com/dastrong/image/upload/c_scale,f_auto,w_10/Portfolio/${image}`}
        />
      </Styled.ImageWrapper>

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
