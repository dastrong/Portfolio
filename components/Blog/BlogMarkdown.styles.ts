import styled, { css } from "styled-components";
import { StyledBlockquote } from "components/Shared/StyledBlockquote";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";

export const Wrapper = styled(StyledTextContainer)`
  max-width: 600px;
  margin: 2rem auto;
`;

export const Blockquote = styled(StyledBlockquote)`
  background-color: ${({ theme: { colors, isDarkTheme } }) =>
    isDarkTheme ? "#272822" : colors.background.main};
  color: ${props => props.theme.colors.text.main};
`;

export const CodeBlockCopy = styled.div<{ isCopied: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: ${props => props.theme.colors.accent};
  z-index: 1;

  svg,
  span {
    background-color: #282922;
  }

  span {
    position: absolute;
    opacity: ${props => (props.isCopied ? 1 : 0)};
    left: -18.5px;
    transform: translateX(${props => (props.isCopied ? -40 : 0)}px);
    transition: transform 0.5s, opacity 0.35s;
    font-size: 1rem;
    line-height: 1.25rem;
    z-index: -1;
    font-weight: bold;
  }
`;

export const Heading = styled.h1<{ level: number; incrementer: number }>`
  ${({ level, incrementer }) => css`
    font-size: ${(6 / level) * incrementer + 1}rem;
    margin: ${level < 3 ? "1.25rem 0 0.8rem" : "1rem 0 0.5rem"};
  `}
`;

export const InlineCode = styled.code`
  color: ${props => props.theme.colors.accent};
`;

export const Image = css<{ maxWidth: number }>`
  min-width: ${props => props.maxWidth}px;
  margin: 0;
`;

export const ImageHttp = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
`;

export const LinkStyles = css`
  position: relative;
  display: inline-block;
  transition: 0s 0s all;
  z-index: 1;
`;

export const LinkAfterStyles = css`
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 2px;
  z-index: -1;
  width: 100%;
  transition: 0.25s transform, 0.5s opacity;
`;

export const Link = styled.a`
  ${LinkStyles}

  &:after {
    background-color: ${props => props.theme.colors.accent};
    ${LinkAfterStyles}
  }
`;

export const List = styled.ol`
  padding-left: 1.75rem;
  margin: 0.5rem 0 1rem;
`;

export const ListItem = styled.li`
  margin: 1rem 0;

  &:first-child {
    margin-top: 0.75rem;
  }

  &:last-child {
    margin-bottom: 0.75rem;
  }
`;

export const Table = styled.table`
  border-spacing: 0;

  thead {
    font-size: 1.1rem;

    tr th {
      border-bottom: 1px solid ${props => props.theme.colors.text.main};
    }
  }

  td,
  th {
    padding: 0.25rem;
  }
`;
