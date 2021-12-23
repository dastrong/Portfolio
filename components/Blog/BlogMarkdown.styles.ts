import { default as NextImage } from "next/image";
import styled from "styled-components";
import { StyledBlockquote } from "components/Shared/StyledBlockquote";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";
import { StyledParagraph } from "components/Shared/StyledParagraph";

export const Wrapper = styled(StyledTextContainer)`
  max-width: 700px;
  margin: 2rem auto;
  background-color: ${props => props.theme.colors.background.light};
  box-shadow: 0px 0px 6px ${props => props.theme.colors.accent}33;
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 1.5rem;

  ${props => props.theme.media.sm} {
    box-shadow: none;
  }

  ${props => props.theme.media.xs} {
    padding: 0.25rem;
  }
`;

export const Blockquote = styled(StyledBlockquote)`
  margin: 1.5rem auto;
`;

export const CodeBlockCopy = styled.div<{ isCopied: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;

  svg {
    color: ${props =>
      props.theme.isDarkTheme
        ? props.theme.colors.pink
        : props.theme.colors.blue};
    filter: drop-shadow(3px 5px 2px rgb(16 12 15));
    opacity: 0.5;
    transition: 250ms opacity;

    &:hover {
      opacity: 1;
    }
  }

  span {
    color: rgb(253, 253, 253);
    text-shadow: rgb(0 23 22) 0px 0px 2px, rgb(3 237 249 / 46%) 0px 0px 3px,
      rgb(3 237 249 / 46%) 0px 0px 5px, rgb(3 237 249 / 46%) 0px 0px 8px;
    position: absolute;
    left: -18.5px;
    line-height: 1;
    z-index: -1;
    transform: translateX(-30px);
    opacity: ${props => (props.isCopied ? 1 : 0)};
    transition: opacity 500ms;
  }
`;

export const Heading = styled.h1<{ level: number }>`
  font-size: ${props => (6 / props.level) * 0.3 + 1}rem;
  line-height: ${props => (props.level < 3 ? 1.2 : 1.4)};
  margin: ${props => (props.level < 3 ? "2rem 0 1.25rem" : "1.75rem 0 1rem")};
`;

export const InlineCode = styled.code`
  color: ${props => props.theme.colors.accent};
  font-family: inherit;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 1.5rem auto;
  border-radius: ${props => props.theme.borderRadius}px;
  text-align: center;
  font-size: 0.9rem;

  img {
    margin-bottom: 0.25rem;
  }
`;

export const Image = styled(NextImage)`
  border-radius: ${props => props.theme.borderRadius}px;
  max-width: 100%;
  height: auto;
  margin: 0rem auto;
`;

export const List = styled.ol`
  margin: 1rem 0 1rem;
  padding-left: 1.6rem;

  ${props => props.theme.media.md} {
    padding-left: 1.35rem;
  }

  ${props => props.theme.media.sm} {
    padding-left: 1.1rem;
  }
`;

export const ListItem = styled.li`
  margin: 1.25rem 0;

  li {
    margin: 1rem 0;
    font-size: 0.9em;
  }

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const Paragraph = styled(StyledParagraph)`
  position: relative;
  margin: 1rem auto 1.5rem;
`;

export const Table = styled.table`
  border-spacing: 0;
  margin: 1.5rem auto;

  thead {
    font-size: 1.1rem;

    tr th {
      border-bottom: 1px solid ${props => props.theme.colors.text.main};
    }
  }

  td,
  th {
    padding: 0.5rem;
  }
`;
