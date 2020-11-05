/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, cloneElement } from "react";
import { useInView } from "react-intersection-observer";
import { intersectionOptions } from "utils";
import css from "styled-jsx/css";

const CSSimgs = css.resolve`
  .optimized-img__container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-property: opacity;
  }
`;

const getCSSlqip = (mainImgLoading: boolean) => css.resolve`
  .optimized-img__container img.optimized-img__lqip {
    filter: blur(10px);
    opacity: ${mainImgLoading ? 1 : 0};
    transition-duration: ${mainImgLoading ? 0 : 400}ms;
    transition-delay: ${mainImgLoading ? 150 : 0}ms;
  }
`;

const getCSShq = (isLoaded: boolean) => css.resolve`
  .optimized-img__container img.optimized-img__hq {
    opacity: ${isLoaded ? 1 : 0};
    transition-duration: 400ms;
  }
`;

export default function OptimizedImage({
  imgFile,
  containerStyles,
  children,
  ...imgProps
}: {
  imgFile: string;
  containerStyles: any;
  alt: string;
  title?: string;
  children: any;
}) {
  // used to check whether the picture has entered the viewport
  const [pictureRef, inView] = useInView(intersectionOptions);

  // used to animate lqip and hq image
  const [isLoaded, setIsLoaded] = useState(false);

  // get the image dimensions from the imgFile string
  const [width, height] = imgFile
    .substring(imgFile.lastIndexOf("(") + 1, imgFile.lastIndexOf(")"))
    .split("x")
    .map(Number);

  const onLoad = () => setIsLoaded(true);
  const mainImgLoading = inView && !isLoaded;

  // get the image's aspectRatio
  const aspectRatio = height / width;

  const CSSlqip = getCSSlqip(mainImgLoading);
  const CSShq = getCSShq(isLoaded);

  // console.log(children);

  return (
    <div className="optimized-img__container" ref={pictureRef}>
      <div style={{ maxWidth: `${width}px`, margin: "0 auto" }}>
        <div style={{ position: "relative", margin: "0 auto" }}>
          <div style={{ paddingBottom: `${aspectRatio * 100}%`, height: 0 }}>
            {/* LQIP */}
            <img
              className={`${CSSimgs.className} ${CSSlqip.className} optimized-img__lqip`}
              src={require(`images/${imgFile}?lqip`)}
              {...imgProps}
            />

            {/* HQ Img */}
            {inView &&
              cloneElement(children, {
                onLoad,
                className: `${CSSimgs.className} ${CSShq.className} optimized-img__hq`,
              })}
          </div>
        </div>
      </div>

      <style jsx>{`
        {/* render the image styles */}
        {CSSimgs.styles}
        {CSSlqip.styles}
        {CSShq.styles}
        
        .optimized-img__container {
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          background-color: rgba(242, 242, 242, 1);
          width: 100%;
          margin: 0 auto;
          ${containerStyles}
        }

        /* picture and div elements don't always pass down every rule to the img elements */
        /* so you can add rules here so the img element can get the container styles */
        .optimized-img__container * {
          border-radius: inherit;
        }

        .optimized-img__container img.optimized-img__lqip {
          filter: blur(10px);
          opacity: ${mainImgLoading ? 1 : 0};
          transition-duration: ${mainImgLoading ? 0 : 400}ms;
          transition-delay: ${mainImgLoading ? 150 : 0}ms;
        }

        .optimized-img__container img.optimized-img__hq {
          opacity: ${isLoaded ? 1 : 0};
          transition-duration: 400ms;
        }
      `}</style>
    </div>
  );
}
