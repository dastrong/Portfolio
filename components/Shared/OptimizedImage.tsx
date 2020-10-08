/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect } from "react";
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

const StyledImage = styled.img<{ lqip?: boolean; loaded?: boolean }>`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  
    /* LQIP */
  ${props =>
    props.lqip &&
    css`
      opacity: ${props.loaded ? 0 : 1};
      transition: opacity 400ms 0ms;
      z-index: 1;
    `}
  
  /* HQ img */
  ${props =>
    !props.lqip &&
    css`
      opacity: ${props.loaded ? 1 : 0};
      transition: opacity 400ms ease 0ms;
    `}
`;

export default function OptimizedImage({
  imgFile,
  // sizes,
  containerStyles,
  webp = false,
  ...imgProps
}: {
  imgFile: string;
  containerStyles: StyledCSSType;
  // sizes?: number[];
  alt: string;
  title?: string;
  webp?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);

  // used to check whether the picture has entered the viewport
  const [pictureRef, inView] = useInView(intersectionOptions);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
    }
  }, [inView]);

  // get the image dimensions from the imgFile string
  const [width, height] = imgFile
    // remove the file extension
    .slice(0, imgFile.indexOf("."))
    // split the width and height into an array
    .split("_")
    // remove the file name from the array
    .filter((_, i) => !!i)
    // remove the `w` and `h` characters and convert to Number
    .map(dimension => Number(dimension.substring(1)));

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
              loaded={!isLoading && inView}
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
                  loaded={!isLoading && inView}
                  onLoad={() => setIsLoading(false)}
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </StyledImageContainer>
  );
}
