import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import HomeMobileActions from "./HomeMobileActions";
import * as Styled from "./HomeCenter.styles";

export default function HomeCenter() {
  const [headerRef, headerInView] = useInView();
  const [descriptionRef, descriptionInView] = useInView();

  return (
    <Styled.CenterContainer>
      <Styled.ImageWrapper>
        <Image
          priority
          src="Portfolio/home_portrait.webp"
          alt="Daniel Strong"
          height={2716}
          width={2100}
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
