import { default as NextImage } from "next/image";
import styled, { css } from "styled-components";
import { StyledButton } from "components/Shared/StyledButton";
import EnterAnimationStyles from "components/Shared/_css/EnterAnimationStyles";

export const ItemContainer = css`
  width: 100%;
  min-width: 300px;
  max-width: 750px;
  margin: 10px auto;

  opacity: 0;
  transform: translateY(40px);
  transition: transform 500ms 50ms, opacity 500ms 50ms;
  ${EnterAnimationStyles}

  ${props => props.theme.media.md} {
    width: 90%;
  }

  ${props => props.theme.media.sm} {
    width: 100%;
  }
`;

export const ItemContent = css`
  display: flex;
  justify-content: center;
  padding: 20px;

  ${props => props.theme.media.md} {
    flex-direction: column;
    padding: 15px;
  }

  ${props => props.theme.media.sm} {
    padding: 10px;
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0);
  border-radius: ${props => props.theme.borderRadius}px;
  height: auto;
  margin-right: 1.25rem;
  width: 51%;

  ${props => props.theme.media.md} {
    margin: 0px auto 1.25rem;
    width: 100%;
  }
`;

export const Image = styled(NextImage)`
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const Content = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.theme.media.md} {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  margin-bottom: 1rem;

  ${props => props.theme.media.md} {
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;

  ${props => props.theme.media.md} {
    font-size: 2rem;
    margin-bottom: 1rem;
    justify-content: center;
  }

  ${props => props.theme.media.sm} {
    font-size: 1.5rem;
  }
`;

export const ExternalLink = styled.a`
  transition: opacity 0.2s;
  margin-left: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text.dark};

  ${props => props.theme.media.md} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  ${props => props.theme.media.md} {
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
  }

  ${props => props.theme.media.sm} {
    width: 100%;
  }
`;

export const Button = styled(StyledButton)`
  width: 49%;
  ${props =>
    !props.primary &&
    css`
      background-color: ${props => props.theme.colors.background.main};
    `}

  ${props => props.theme.media.sm} {
    font-size: 0.9rem;
  }
`;
