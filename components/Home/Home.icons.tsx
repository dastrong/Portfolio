import React from "react";
import styled, { keyframes } from "styled-components";
import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaJs,
  FaNpm,
  FaYarn,
  FaGit,
  FaBug,
  FaStackOverflow,
} from "react-icons/fa";
import {
  SiCss3,
  SiMaterialui,
  SiStyledcomponents,
  SiTailwindcss,
  SiSemanticuireact,
  SiBootstrap,
  SiBulma,
  SiSass,
  SiNodedotjs,
  SiReact,
  SiVuedotjs,
  SiNuxtdotjs,
  SiRedux,
  SiNextdotjs,
  SiGatsby,
  SiGraphql,
  SiJest,
  SiAuth0,
  SiVercel,
  SiHeroku,
  SiDigitalocean,
  SiServerless,
  SiAmazonaws,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiFigma,
  SiGithubactions,
} from "react-icons/si";

export const icons = {
  basics: [FaHtml5, FaJs, FaNpm, FaGit, FaBug, FaYarn, FaStackOverflow],
  styles: [
    SiCss3,
    SiSass,
    SiMaterialui,
    SiStyledcomponents,
    SiTailwindcss,
    SiSemanticuireact,
    SiBootstrap,
    SiBulma,
  ],
  libraries: [
    SiNodedotjs,
    SiReact,
    SiVuedotjs,
    SiNuxtdotjs,
    SiRedux,
    SiNextdotjs,
    SiGatsby,
    SiGraphql,
    SiJest,
  ],
  extras: [
    SiAuth0,
    SiVercel,
    SiHeroku,
    SiDigitalocean,
    SiServerless,
    SiAmazonaws,
    SiEslint,
    SiPrettier,
    SiWebpack,
    SiFigma,
    SiGithubactions,
  ],
};

const containerExit = keyframes`
 0% {
    transform: translateY(0%);
    opacity: 1;
  }
  50% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const OuterContainer = styled.div<{ delay: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(0%);
  animation: ${containerExit} 2500ms ${props => props.delay}ms forwards;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const iconFalling = keyframes`
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(150vh);
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  color: var(--white);
  border-radius: 111111px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  animation: ${iconFalling} 8000ms forwards;
`;

export default function Icons({
  icons,
  exitDelay,
  enterDelay,
  name,
  color,
}: {
  icons: IconType[];
  exitDelay: number;
  enterDelay: number;
  name: string;
  color: "--blue" | "--pink";
}) {
  return (
    <OuterContainer delay={exitDelay}>
      <InnerContainer>
        {icons.map((Icon, i) => {
          const maxDelay = 1000;
          const percent = i / (icons.length - 1);
          const val = Math.floor(100 / icons.length - 2);
          return (
            <StyledIcon
              key={name + i}
              style={{
                fill: `var(${color})`,
                top: `-${val + 2}vw`,
                fontSize: `${val}vw`,
                animationDelay: `${maxDelay * percent + enterDelay}ms`,
                marginLeft: `${i * (val + 2)}vw`,
              }}
            >
              <Icon style={{ fill: "inherit" }} />
            </StyledIcon>
          );
        })}
      </InnerContainer>
    </OuterContainer>
  );
}
