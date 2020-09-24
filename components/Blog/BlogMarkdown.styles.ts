import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
`;

export const Blockquote = styled.blockquote`
  padding: 1rem;
  padding-right: 0;
  border-left: 3px solid ${props => props.theme.colors.accent};
  margin: 1rem 0;
  background-color: #272822;
  color: #f3f8fa;
`;

export const Heading = styled.h1<{ level: number; incrementer: number }>`
  ${({ level, incrementer }) => css`
    font-size: ${(6 / level) * incrementer + 1}rem;
    margin: ${level < 3 ? "1.25rem 0 0.8rem" : "1rem 0 0.5rem"};
  `}
`;

export const Image = css`
  min-width: 767px;
`;

export const Link = styled.a`
  position: relative;
  display: inline-block;
  transition: 0s 0s all;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 2px;
    z-index: -1;
    width: 100%;
    background-color: ${props => props.theme.colors.accent};
    transition: 0.25s transform, 0.5s opacity;
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

export const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: 0.5rem;

  &:only-child,
  &:last-child {
    margin-bottom: 0rem;
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