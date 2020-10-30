// simple list cards when lots of info might be listed
import React from "react";
import styled from "styled-components";

import InterLink from "components/Shared/Links";
import { BlogTypes } from "components/Blog/BlogTypes";
import { WorkTypes } from "components/Work/WorkTypes";
import { formatDate } from "utils";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 300px;
  margin: 1.75rem auto;
`;

const StyledTitle = styled.a`
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: ${props => props.theme.fontSize.md};
  cursor: pointer;
  color: ${props => props.theme.colors.text.main};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.colors.accent};
  transition: opacity 0.15s;
  margin-bottom: 0.25rem;

  ${props => props.theme.media.md} {
    font-size: ${props => props.theme.fontSize.sm};
  }

  &:hover {
    opacity: 0.95;
  }
`;

const StyledDate = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  font-variant: petite-caps;
  opacity: 0.9;
  color: ${props => props.theme.colors.text.dark};
  margin: 0.5rem 0 -0.25rem;
`;

const StyledSubtitle = styled.p`
  margin-top: 0.5rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text.light};

  ${props => props.theme.media.md} {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;

export const BlogCard = ({ title, description, date }: BlogTypes) => (
  <StyledContainer>
    <InterLink
      href="/blog/[blogTitle]"
      as={`/blog/${title.split(" ").join("").toLowerCase()}`}
      StyledAnchor={StyledTitle}
    >
      {title}
    </InterLink>

    <StyledDate>{formatDate(date)}</StyledDate>
    <StyledSubtitle>{description}</StyledSubtitle>
  </StyledContainer>
);

export const WorkCard = ({ site_name, description }: WorkTypes) => (
  <StyledContainer>
    <InterLink
      href="/work/[workName]"
      as={`/work/${site_name.split(" ").join("").toLowerCase()}`}
      StyledAnchor={StyledTitle}
    >
      {site_name}
    </InterLink>

    <StyledSubtitle>{description}</StyledSubtitle>
  </StyledContainer>
);
