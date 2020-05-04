import React from "react";
import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 90%;
  min-width: 310px;
  max-width: ${props => `${props.theme.width.lg}px`};
`;

const StyledColumn = styled.div`
  width: 75%;
  margin-left: 30px;
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
  min-width: 310px;
  max-width: 375px;
  border-radius: 30px;
`;

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 110%;
  letter-spacing: 0.2px;
  margin: 20px 0;

  &:first-child,
  &:last-child {
    margin: 0;
  }
`;

export default function About() {
  return (
    <>
      <PageHead
        title="About Me"
        description="Get to know the man behind Daniel Strong Tech."
      />

      <Header>About Me</Header>

      <StyledContainer>
        <StyledImage
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt="yoda"
        />
        <StyledColumn>
          <StyledText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nihil quos neque facilis quaerat velit voluptatem,
            voluptatibus tempora? Vero culpa minus molestias cupiditate voluptas
            beatae nobis nihil veniam doloribus doloremque!
          </StyledText>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            obcaecati.
          </StyledText>
          <StyledText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            adipisci possimus consequuntur commodi iure numquam sed ex, rerum
            eius cumque error ullam. Mollitia earum libero ullam, provident
            tempore aliquam eius praesentium sapiente adipisci quam maxime
            dolores culpa consequatur dignissimos quos?
          </StyledText>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            quidem non nulla ratione quibusdam. Delectus aspernatur optio saepe
            dolor deserunt.
          </StyledText>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            rerum, quisquam dolorum aliquam quo incidunt quae blanditiis,
            expedita omnis nam neque sint cupiditate dolores tempore nihil
            facilis. Deserunt, voluptas!
          </StyledText>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            itaque.
          </StyledText>
        </StyledColumn>
      </StyledContainer>
    </>
  );
}
