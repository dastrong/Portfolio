import React from "react";
import styled from "styled-components";
import Link from "next/link";

const links = [
  { href: "/about", text: "About" },
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];

const StyledList = styled.ul`
  ${props => props.theme.centered}
  list-style-type: none;

  ${props => props.theme.media.md} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledItem = styled.a<LinkListProps>`
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  padding: 15px 10px;
  transition-property: all;
  transition-duration: ${props => `${props.isMenuOpen ? 0.15 : 0}s`};
  transition-delay: ${props =>
    `${props.isMenuOpen ? props.index * 0.1 + 0.2 : 0}s`};
  opacity: ${props => (props.isMenuOpen ? 1 : 0)};
  transform: ${props => `translateY(${props.isMenuOpen ? 0 : 10}px)`};
  color: ${props => props.theme.colors.text.main};
  text-decoration-color: ${props => props.theme.colors.pink};

  &:hover {
    text-decoration-line: underline;

    ${props => props.theme.media.md} {
      text-decoration: none;
    }
  }

  ${props => props.theme.media.md} {
    width: 100%;
    text-decoration: none;
    font-size: 1.4rem;
  }
`;

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  width: 60px;
  margin: 10px auto;
  background-color: ${props => props.theme.colors.pink};
  display: none;

  ${props => props.theme.media.md} {
    display: block;
  }
`;

type LinkListProps = {
  isMenuOpen?: boolean;
  index?: number;
};

export default function LinkList({ isMenuOpen }: LinkListProps) {
  return (
    <StyledList>
      {links.map(({ text, href }, index) => (
        <li key={text}>
          <Link href={href}>
            <StyledItem isMenuOpen={isMenuOpen} index={index}>
              {text}
            </StyledItem>
          </Link>

          <StyledDivider />
        </li>
      ))}
    </StyledList>
  );
}
