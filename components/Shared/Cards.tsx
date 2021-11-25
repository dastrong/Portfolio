// simple list cards when lots of info might be listed
import React from "react";
import styled from "styled-components";
import { BiCalendar, BiCalendarEdit } from "react-icons/bi";

import InterLink from "components/Shared/Links";
import type { BlogTypes } from "components/Blog/Blog.types";
import type { WorkTypes } from "components/Work/Work.types";
import { formatTitleToFile } from "utils/formatTitleToFile";
import { formatDate } from "utils/formatDate";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 300px;
  margin: 1.75rem auto;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.colors.background.main}85;
  box-shadow: 0px 0px 6px ${props => props.theme.colors.accent}33;
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

const StyledDates = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0 -0.25rem;

  svg {
    height: 1.15rem;
    width: 1.15rem;
    margin-right: 0.25rem;
  }

  * {
    color: ${props => props.theme.colors.text.dark};
    opacity: 0.9;
  }
`;

const StyledDate = styled.span`
  font-size: 0.7rem;
  font-variant: petite-caps;
`;

const StyledSubtitle = styled.p`
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text.light};

  ${props => props.theme.media.md} {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;

export const BlogCard = ({
  title,
  description,
  date_publish,
  date_update,
}: BlogTypes) => (
  <StyledContainer>
    <InterLink
      href={`/blog/${formatTitleToFile(title)}`}
      StyledAnchor={StyledTitle}
    >
      {title}
    </InterLink>

    <StyledDates>
      <BiCalendar title="Published Date" />
      <StyledDate>{formatDate(date_publish)}</StyledDate>

      {date_update && (
        <>
          <BiCalendarEdit title="Updated Date" style={{ marginLeft: "1rem" }} />
          <StyledDate>{formatDate(date_update)}</StyledDate>
        </>
      )}
    </StyledDates>
    <StyledSubtitle>{description}</StyledSubtitle>
  </StyledContainer>
);

export const WorkCard = ({ site_name, description }: WorkTypes) => (
  <StyledContainer>
    <InterLink
      href={`/work/${formatTitleToFile(site_name)}`}
      StyledAnchor={StyledTitle}
    >
      {site_name}
    </InterLink>

    <StyledSubtitle>{description}</StyledSubtitle>
  </StyledContainer>
);
