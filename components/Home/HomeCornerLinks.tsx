import React from "react";
import { useTheme } from "styled-components";
import { FaEnvelope } from "react-icons/fa";

import InterLink from "components/Shared/Links";
import { StyledLinkIcon } from "components/Shared/StyledLinkIcon";
import { externalLinks } from "utils/links";

import * as Styled from "./HomeCornerLinks.styles";
import { blendColors } from "./_blendColors";
import { iconSize, dimensions } from "./_variables";

export default function HomeCornerLinks() {
  const { colors } = useTheme();
  const mainBlendedGradientColor = blendColors(colors.blue, colors.pink);

  const [topLeftColorPointY, topLeftColorPointX] = [
    blendColors(
      colors.blue,
      mainBlendedGradientColor,
      1 - dimensions.cornerBox.height
    ),
    blendColors(
      mainBlendedGradientColor,
      colors.pink,
      dimensions.cornerBox.width
    ),
  ];
  const [topRightColorPointY, topRightColorPointX] = [
    blendColors(
      mainBlendedGradientColor,
      colors.pink,
      1 - dimensions.cornerBox.height
    ),
    blendColors(
      mainBlendedGradientColor,
      colors.pink,
      1 - dimensions.cornerBox.width
    ),
  ];
  const [bottomLeftColorPointY, bottomLeftColorPointX] = [
    blendColors(
      colors.blue,
      mainBlendedGradientColor,
      dimensions.cornerBox.height
    ),
    blendColors(
      colors.blue,
      mainBlendedGradientColor,
      dimensions.cornerBox.width
    ),
  ];
  const [bottomRightColorPointY, bottomRightColorPointX] = [
    blendColors(
      mainBlendedGradientColor,
      colors.pink,
      dimensions.cornerBox.height
    ),
    blendColors(
      colors.blue,
      mainBlendedGradientColor,
      1 - dimensions.cornerBox.width
    ),
  ];

  return (
    <>
      <Styled.TopLeftGradient
        style={{
          background: `linear-gradient(to top right, ${topLeftColorPointY}, ${topLeftColorPointX})`,
        }}
      >
        <Styled.TopLeftContainer>
          <InterLink href="/about" StyledAnchor={Styled.Link}>
            About
          </InterLink>
        </Styled.TopLeftContainer>
      </Styled.TopLeftGradient>

      <Styled.TopRightGradient
        style={{
          background: `linear-gradient(to top left, ${topRightColorPointY}, ${topRightColorPointX})`,
        }}
      >
        <Styled.TopRightContainer>
          <InterLink href="/work" StyledAnchor={Styled.Link}>
            Work
          </InterLink>
        </Styled.TopRightContainer>
      </Styled.TopRightGradient>

      <Styled.BottomLeftGradient
        style={{
          background: `linear-gradient(to bottom right, ${bottomLeftColorPointY}, ${bottomLeftColorPointX})`,
        }}
      >
        <Styled.BottomLeftContainer>
          <InterLink href="/blog" StyledAnchor={Styled.Link}>
            Blog
          </InterLink>
        </Styled.BottomLeftContainer>
      </Styled.BottomLeftGradient>

      <Styled.BottomRightGradient
        style={{
          background: `linear-gradient(to bottom left, ${bottomRightColorPointY}, ${bottomRightColorPointX})`,
        }}
      >
        <Styled.BottomRightContainer>
          <InterLink
            href="/contact"
            StyledAnchor={StyledLinkIcon}
            aria-label="Contact Us"
          >
            <FaEnvelope size={iconSize} />
          </InterLink>
          {externalLinks.map(({ href, RegIcon, text }) => (
            <StyledLinkIcon href={href} key={href} aria-label={text}>
              <RegIcon size={iconSize} />
            </StyledLinkIcon>
          ))}
        </Styled.BottomRightContainer>
      </Styled.BottomRightGradient>
    </>
  );
}
