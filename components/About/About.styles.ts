import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 50px;
  width: 90%;
  min-width: 310px;
  max-width: ${props => `${props.theme.width.md}px`};

  ${props => props.theme.media.md} {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  background-color: ${props => props.theme.colors.background.light}cf;
  width: 75%;
  margin-left: 30px;
  padding: 10px;

  ${props => props.theme.media.md} {
    margin: 20px auto 0;
  }

  ${props => props.theme.media.sm} {
    width: 85%;
  }

  ${props => props.theme.media.xs} {
    min-width: 310px;
    max-width: 375px;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 40%;
  min-width: 310px;
  max-width: 375px;
  border-radius: 155px;
  box-shadow: 0px 0px 1px 3px ${props => props.theme.colors.accent};

  ${props => props.theme.media.sm} {
    min-width: 250px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.2px;
  margin: 20px 0;
  font-weight: 300;

  &:first-child,
  &:last-child {
    margin: 0;
  }
`;
