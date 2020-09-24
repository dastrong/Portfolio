import React from "react";
import { useRouter } from "next/router";
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";
import { FaTimes } from "react-icons/fa";

type TagContainerType = {
  addStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const StyledTagsContainer = styled.div<TagContainerType>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: -5px auto;

  /* add any additional styles passed into the Tags component here */
  ${props => props.addStyles}
`;

const StyledTag = styled.button<{ active?: boolean; small?: boolean }>`
  position: relative;
  border: 1px solid ${props => props.theme.colors.accent}75;
  background-color: ${props => props.theme.colors.accent}0f;
  color: ${props => props.theme.colors.text.dark};
  box-shadow: 1px 1px 1.5px ${props => props.theme.colors.accent};
  cursor: pointer;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.small
      ? css`
          font-size: 0.75rem;
          line-height: 0.75rem;
          border-radius: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin: 0.25rem;
        `
      : css`
          font-size: 0.9rem;
          line-height: 0.9rem;
          border-radius: 0.9rem;
          padding: 0.35rem 0.7rem;
          margin: 5px;
        `}

  span,
  svg {
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }

  span {
    transform: translateY(0%);
    font-weight: ${props => (props.active ? "bold" : "normal")};
    color: ${props => (props.active ? props.theme.colors.accent : "inherit")};
  }
  svg {
    position: absolute;
    opacity: 0;
    transform: translateY(-150%);
  }

  &:hover {
    opacity: ${props => (props.active ? 1 : 0.8)};
    transform: translate(0.5px, 0.5px);

    ${props =>
      props.active &&
      css`
        span {
          opacity: 0;
          transform: translateY(150%);
        }

        svg {
          opacity: 1;
          transform: translateY(0%);
        }
      `}
  }
`;

export default function Tags({
  tags,
  small = false,
  currentTag,
  addContainerStyles,
}: {
  tags: string[];
  small?: boolean;
  currentTag?: string;
  addContainerStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}) {
  const router = useRouter();
  const isTagsPage = router.pathname.startsWith("/tags");

  const handleTagClick = (tag: string) => {
    const tagPath = `/tags?q=${tag}`;

    // if we click the same tag remove the query from the url
    const newPath = router.asPath === tagPath ? "/tags" : tagPath;

    // using shallow option to avoid re-running data fetching
    // will ignore shallow if routing to /tags from a different page
    router.push(newPath, undefined, { shallow: true });
  };

  if (tags.length === 0) return null;

  return (
    <StyledTagsContainer addStyles={addContainerStyles}>
      {tags.map(tag => {
        const active = currentTag === tag;
        return (
          <StyledTag
            active={active}
            small={small}
            onClick={() => handleTagClick(tag)}
            key={tag}
          >
            <span>{tag}</span>
            {isTagsPage && <FaTimes />}
          </StyledTag>
        );
      })}
    </StyledTagsContainer>
  );
}
