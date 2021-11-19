import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter({
  image: { width, height, base64, img_file },
}: {
  image: { width: number; height: number; base64: string; img_file: string };
}) {
  const [headerRef, headerInView] = useInView();
  const [descriptionRef, descriptionInView] = useInView();
  const [blurred, setBlurred] = useState(true);

  return (
    <Styled.CenterContainer>
      <Styled.ImageWrapper blurred={blurred}>
        <Image
          priority
          src={img_file}
          alt="Daniel Strong"
          height={height}
          width={width}
          placeholder="blur"
          blurDataURL={base64}
          onLoadingComplete={() => setBlurred(false)}
          quality={85}
          layout="responsive"
          sizes="(max-width: 500px) 300px, 500px"
        />
      </Styled.ImageWrapper>

      <Styled.TextAndActionsContainer>
        <Styled.NameHeader ref={headerRef} inView={headerInView}>
          Daniel Strong
        </Styled.NameHeader>

        <Styled.JobDescription ref={descriptionRef} inView={descriptionInView}>
          Full Stack Developer
        </Styled.JobDescription>

        <HomeMobileActions />
      </Styled.TextAndActionsContainer>
    </Styled.CenterContainer>
  );
}
