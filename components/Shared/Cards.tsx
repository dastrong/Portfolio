// simple list cards when lots of info might be listed
import React from "react";
import styled from "styled-components";

import InterLink from "components/Shared/Links";
import DateWithOrdinal from "components/Shared/DateWithOrdinal";
import { BlogTypes } from "components/Blog/BlogTypes";
import { WorkTypes } from "components/Work/WorkTypes";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 300px;
  margin: 1.75rem auto;

  ${props => props.theme.media.xs} {
    text-align: center;
  }
`;

const StyledTitle = styled.a`
  font-size: ${props => props.theme.fontSize.md};
  cursor: pointer;
  color: ${props => props.theme.colors.text.main};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.colors.accent};
  transition: opacity 0.15s;
  margin-bottom: 0.2rem;

  &:hover {
    opacity: 0.95;
  }
`;

const StyledDate = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  font-style: italic;
  color: ${props => props.theme.colors.text.dark};
`;

const StyledSubtitle = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.text.dark};
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

    <StyledDate>
      <DateWithOrdinal date={date} />
    </StyledDate>
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
