/* eslint-disable @next/next/no-img-element */
import React from "react";
import { withOGImage } from "next-api-og-image";
import { renderToString } from "react-dom/server";
import styled, { ServerStyleSheet } from "styled-components";
import { textures, lightColors, darkColors } from "utils/theme";

const Wrapper = styled.div`
  /* @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    src: url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap")
      format("woff2");
  }
  @font-face {
    font-family: "Work Sans";
    font-style: bold;
    font-weight: 700;
    src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap")
      format("woff2");
  } */

  font-family: "Open Sans";
  width: 1200px;
  height: 630px;
  background-image: url("${textures.light}");
  background-repeat: repeat;
  background-color: ${lightColors.light};
  padding: 50px;
  box-sizing: border-box;
  line-height: 1.3;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const ContentHeading = styled.h1`
  font-family: "Work Sans";
  font-size: 2rem;
  color: ${darkColors.light};
  opacity: 0.6;
`;

const ContentTitle = styled.p`
  font-family: "Open Sans";
  font-size: 4.5rem;
  color: ${darkColors.dark};
  opacity: 0.9;
`;

// const SubHeading = styled.p`
//   font-family: "Open Sans";
//   font-size: 3rem;
//   color: ${darkColors.dark};
//   opacity: 0.8;
// `;

const SubText = styled.p`
  font-family: "Open Sans";
  font-size: 2rem;
  color: ${darkColors.main};
  opacity: 0.6;
`;

const Thumbnail = styled.img.attrs<{ size: number }>(props => ({
  src: `https://res.cloudinary.com/dastrong/image/upload/c_scale,r_max,w_${props.size}/v1639140498/Portfolio/blog_thumbnail_vqblya.jpg`,
}))<{ size: number }>`
  border-radius: 99999px;
`;

const BottomLeftBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const BottomRightImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const MountainImg = styled(BottomRightImage).attrs({
  src: "https://res.cloudinary.com/dastrong/image/upload/f_auto,w_500/v1638607193/Portfolio/logo.svg",
})``;

// const DSTechImg = styled(BottomRightImage).attrs({
//   src: "https://res.cloudinary.com/dastrong/image/upload/f_auto,w_75/v1635566564/Portfolio/favicon.png",
// })``;

// const WorkImg = styled(BottomRightImage).attrs(props => ({ src: props.src }))`
//   width: 500px;
// `;

function DefaultTemplate(props: Omit<QueryProps, "type">) {
  return (
    <Wrapper>
      <div>
        <Thumbnail size={250} />
        <div
          style={{
            display: "inline-block",
            verticalAlign: "top",
            marginLeft: 32,
            width: "calc(100% - 32px - 250px)",
          }}
        >
          <ContentHeading>{props.heading}</ContentHeading>
          <ContentTitle>{props.title}</ContentTitle>
        </div>
        <BottomLeftBox>
          <SubText>danielstrong.tech/{props.url}</SubText>
        </BottomLeftBox>
        <MountainImg />
      </div>
    </Wrapper>
  );
}

// function BlogTemplate(props: Omit<QueryProps, "type">) {
//   return (
//     <Wrapper>
//       <div>
//         <div style={{ marginLeft: 175 + 32 }}>
//           <ContentHeading>Checkout this article</ContentHeading>
//           <ContentTitle>{props.title}</ContentTitle>
//         </div>
//         <BottomLeftBox>
//           <Thumbnail size={175} />
//           <div
//             style={{
//               display: "inline-block",
//               verticalAlign: "bottom",
//               marginLeft: 32,
//             }}
//           >
//             <SubHeading>Daniel Strong</SubHeading>
//             <SubText>danielstrong.tech/blog</SubText>
//           </div>
//         </BottomLeftBox>
//         <DSTechImg />
//       </div>
//     </Wrapper>
//   );
// }

// function WorkTemplate(props: Omit<QueryProps, "type">) {
//   return (
//     <Wrapper>
//       <div>
//         <ContentHeading>Checkout my work</ContentHeading>
//         <ContentTitle>{props.title}</ContentTitle>
//         <BottomLeftBox>
//           <Thumbnail size={150} style={{ marginBottom: 8 }} />
//           <SubHeading>Daniel Strong</SubHeading>
//           <SubText>danielstrong.tech/work</SubText>
//         </BottomLeftBox>
//         <WorkImg src={props.image} />
//       </div>
//     </Wrapper>
//   );
// }

type QueryProps = {
  type?: "default" | "blog" | "work";
  title?: string;
  heading?: string;
  image?: string;
  url?: string;
};

function OgImageTemplate({ type, ...props }: QueryProps) {
  return <DefaultTemplate {...props} />;
  // return type === "work" ? (
  //   <WorkTemplate {...props} />
  // ) : type === "blog" ? (
  //   <BlogTemplate {...props} />
  // ) : (
  //   <DefaultTemplate {...props} />
  // );
}

export default withOGImage({
  template: {
    html: ({ type, title, heading, image, url }: QueryProps) => {
      const sheet = new ServerStyleSheet();
      try {
        const html = renderToString(
          sheet.collectStyles(
            <OgImageTemplate
              type={type}
              title={title}
              heading={heading}
              image={image}
              url={url}
            />
          )
        );
        const styleTags = sheet.getStyleTags();

        return `<html><style>body {margin:0;}</style>${styleTags}<body>${html}</body></html>`;
      } catch (error) {
        console.error(error);
        return "error";
      } finally {
        sheet.seal();
      }
    },
  },
  dev: { inspectHtml: false },
});
