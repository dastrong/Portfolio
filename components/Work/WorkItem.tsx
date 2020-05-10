import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GradientContainer from "components/Shared/GradientContainer";
import { WorkTypes } from "./WorkTypes";
import * as Styled from "./WorkItem.styles";
import InterLink from "components/Shared/Links";

export default function WorkItem({
  description,
  image,
  links,
  show_work,
  site_name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tech_used,
  routeName,
}: WorkTypes & { routeName?: string }) {
  if (!show_work) return null;

  return (
    <GradientContainer
      containerStyles={Styled.ItemContainer}
      contentStyles={Styled.ItemContent}
    >
      <Styled.Image src={image} alt={routeName} />

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
          {links.github && (
            <Styled.Button href={links.github} target="_blank">
              View Source
            </Styled.Button>
          )}
        </Styled.ButtonGroup>
      </Styled.Content>
    </GradientContainer>
  );
}
