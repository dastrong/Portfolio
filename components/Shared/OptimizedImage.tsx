/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, cloneElement } from "react";
import { useInView } from "react-intersection-observer";
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";
import { intersectionOptions } from "utils/intersectionOptions";

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

const ImageStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-property: opacity;
`;

const StyledLQIP = styled.img<{ mainImgLoading: boolean }>`
  ${ImageStyles};
  filter: blur(10px);
  opacity: ${props => (props.mainImgLoading ? 1 : 0)};
  transition-duration: ${props => (props.mainImgLoading ? 0 : 400)}ms;
  transition-delay: ${props => (props.mainImgLoading ? 150 : 0)}ms;
`;

export const HQstyles = css<{ isloaded?: string }>`
  ${ImageStyles};
  opacity: ${props => (props.isloaded === "true" ? 1 : 0)};
  transition-duration: 400ms;
`;

export default function OptimizedImage({
  imgFile,
  containerStyles,
  children,
  ...imgProps
}: {
  imgFile: string;
  containerStyles: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  alt: string;
  title?: string;
  children: React.ReactElement;
}) {
  // used to check whether the picture has entered the viewport
  const [pictureRef, inView] = useInView(intersectionOptions);

  // used to animate lqip and hq image
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => setIsLoaded(true);

  // get the dimensions from the original image
  const { width, height } = children.props.src;

  // get the image's aspectRatio
  const aspectRatio = height / width;

  // check if the hq img is currently loading
  const mainImgLoading = inView && !isLoaded;

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
            <StyledLQIP
              src={require(`images/${imgFile}?lqip`)}
              alt={imgProps.alt + " low quality"}
              mainImgLoading={mainImgLoading}
            />

            {/* HQ Image */}
            {inView &&
              cloneElement(children, {
                onLoad,
                isloaded: isLoaded.toString(),
                ...imgProps,
              })}
          </div>
        </div>
      </div>
    </StyledImageContainer>
  );
}
