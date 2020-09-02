import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import styled, { css } from "styled-components";

type OptimizedImageProps = {
  imgFile: string;
  className?: string;
  sizes?: number[];
};

export default function OptimizedImage({
  imgFile,
  className,
  sizes,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // used to check whether the picture has entered the viewport
  const [pictureRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
    }
  }, [inView]);

  console.log(imgFile, className, sizes, inView);

  return (
    <div ref={pictureRef}>
      {/* LQIP */}
      <div>
        <img src={require(`images/${imgFile}?lqip&height=300`)} />
      </div>

      {/* HQ Image */}
      {inView && (
        <picture>
          <source
            type="image/webp"
            srcSet={require(`images/${imgFile}?webp&height=300`)}
          />
          <img
            src={require(`images/${imgFile}`)}
            onLoad={() => setIsLoading(false)}
          />
        </picture>
      )}
    </div>
  );
}
