// const SubHeading = styled.p`
//   font-family: "Open Sans";
//   font-size: 3rem;
//   color: ${darkColors.dark};
//   opacity: 0.8;
// `;

// const SubText = styled.p`
//   font-family: "Open Sans";
//   font-size: 2rem;
//   color: ${darkColors.main};
//   opacity: 0.6;
// `;

// const BottomRightImage = styled.img`
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;

// const MountainImg = styled(BottomRightImage).attrs({
//   src: "https://res.cloudinary.com/dastrong/image/upload/f_auto,w_500/v1638607193/Portfolio/logo.svg",
// })``;

// const DSTechImg = styled(BottomRightImage).attrs({
//   src: "https://res.cloudinary.com/dastrong/image/upload/f_auto,w_75/v1635566564/Portfolio/favicon.png",
// })``;

// const WorkImg = styled(BottomRightImage).attrs(props => ({ src: props.src }))`
//   width: 500px;
// `;

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

export default () => undefined;
