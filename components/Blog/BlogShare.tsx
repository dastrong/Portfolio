import React from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  RedditIcon,
  RedditShareButton,
} from "react-share";

import { BlogIntersectionOptions } from "./BlogIntersectionOptions";
import { Link } from "./BlogMarkdown.styles";
import * as Styled from "./BlogShare.styles";

export default function BlogShare() {
  const { asPath } = useRouter();
  const [ref, inView] = useInView(BlogIntersectionOptions);

  const url = "https://danielstrong.tech" + asPath;

  return (
    <Styled.Container ref={ref}>
      <Styled.ButtonContainer inView={inView}>
        <FacebookShareButton url={url}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>

        <RedditShareButton url={url}>
          <RedditIcon round size={32} />
        </RedditShareButton>
      </Styled.ButtonContainer>

      <Styled.Paragraph inView={inView}>
        If you enjoyed the content, feel free to share it. If you noticed
        something incorrect or want to discuss this post, you can{" "}
        <Link href="/contact">contact me</Link> directly.
      </Styled.Paragraph>
    </Styled.Container>
  );
}
