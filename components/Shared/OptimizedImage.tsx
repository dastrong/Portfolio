/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";
import { intersectionOptions } from "utils";

type StyledCSSType = FlattenInterpolation<ThemeProps<DefaultTheme>>;

type StyledImageContainerProps = {
  containerStyles: StyledCSSType;
  maxWidth: number;
};

const StyledImageContainer = styled.div<StyledImageContainerProps>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background-color: rgba(242, 242, 242, 1);
  width: 100%;
  margin: 0 auto;
  max-width: ${props => props.maxWidth}px;

  /* these are any styles created with styled-components css passed down */
  ${props => props.containerStyles}

  /* picture and div elements don't always pass down every rule to the img elements */
  /* so you can add rules here so the img element can get the container styles */
  * {
    border-radius: inherit;
  }
`;

type StyledImageTypes = {
  lqip?: boolean;
  hideLqip?: boolean;
  isLoading?: boolean;
  isLoaded?: boolean;
};
const StyledImage = styled.img<StyledImageTypes>`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  transition-property: opacity;
  
  ${({ lqip, hideLqip, isLoaded }) =>
    lqip
      ? /* LQIP */
        css`
          filter: blur(10px);
          opacity: ${isLoaded || hideLqip ? 0 : 1};
          transition-duration: ${isLoaded || hideLqip ? 0 : 300}ms;
          z-index: 11;
        `
      : /* HQ img */
        css`
          opacity: ${isLoaded ? 1 : 0};
          transition-duration: 300ms;
        `}
  }
`;

export default function OptimizedImage({
  imgFile,
  containerStyles,
  webp = false,
  ...imgProps
}: {
  imgFile: string;
  containerStyles: StyledCSSType;
  alt: string;
  title?: string;
  webp?: boolean;
}) {
  // used to check whether the picture has entered the viewport
  const [pictureRef, inView] = useInView(intersectionOptions);

  // used to animate lqip and hq image
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideLqip, setHideLqip] = useState(true);

  // trigger load animation once it's in view
  useEffect(() => {
    if (inView && !isLoading && !isLoaded) {
      setIsLoading(true);
    }
  }, [inView]);

  // hide the lqip unless the loading threshold has been passed
  useEffect(() => {
    const threshold = 100; //ms
    let id;

    if (isLoading) {
      id = setTimeout(() => {
        console.log(isLoading, "tooooo slowwww");
        setHideLqip(false);
      }, threshold);
    }

    return () => {
      clearTimeout(id);
    };
  }, [isLoading]);

  // get the image dimensions from the imgFile string
  const [width, height] = imgFile
    .substring(imgFile.lastIndexOf("(") + 1, imgFile.lastIndexOf(")"))
    .split("x")
    .map(Number);

  // get the image's aspectRatio
  const aspectRatio = height / width;

  // require the imgs here, so they build correctly
  const webpSrcSet = webp ? require(`images/${imgFile}?webp`) : "";
  const fallbackSrc = require(`images/${imgFile}`);
  // place into an object so we can spread onto the element
  const webpImg = { srcSet: inView ? webpSrcSet : "" };
  const fallbackImg = { src: inView ? fallbackSrc : "" };

  return (
    <StyledImageContainer
      ref={pictureRef}
      containerStyles={containerStyles}
      maxWidth={width}
    >
      <div style={{ maxWidth: `${width}px`, margin: "0 auto" }}>
        <div style={{ position: "relative", margin: "0 auto" }}>
          <div style={{ paddingBottom: `${aspectRatio * 100}%`, height: 0 }}>
            {/* LQIP */}
            <StyledImage
              lqip
              {...imgProps}
              height={height}
              width={width}
              src={require(`images/${imgFile}?lqip`)}
              hideLqip={hideLqip}
              isLoaded={isLoaded}
            />

            {/* HQ Image */}
            {inView && (
              <picture>
                {/* if webp is supported use this image */}
                {webp && <source type="image/webp" {...webpImg} />}

                {/* otherwise, use the default */}
                <StyledImage
                  {...imgProps}
                  height={height}
                  width={width}
                  {...fallbackImg}
                  isLoaded={isLoaded}
                  onLoad={() => {
                    setIsLoading(false);
                    setIsLoaded(true);
                  }}
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </StyledImageContainer>
  );
}
