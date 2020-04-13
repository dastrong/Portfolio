import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

const socials = [
  { Icon: FaGithubSquare, href: "https://github.com/dastrong" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/daniel-strong-tech" },
  { Icon: FaTwitterSquare, href: "https://twitter.com/DaStrongWon" },
];

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  margin: 5px;
  color: ${props => props.theme.colors.text.main};
`;

export default function LinkSocial() {
  return (
    <StyledContainer>
      {socials.map(({ Icon, href }) => (
        <StyledButton
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size="30" />
        </StyledButton>
      ))}
    </StyledContainer>
  );
}
