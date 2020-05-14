import styled, { css } from "styled-components";
import { StyledButton } from "components/Shared/StyledButton";

export const ItemContainer = css`
  width: 100%;
  min-width: 300px;
  max-width: 750px;
  margin: 10px auto;

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
  }
`;

export const Image = styled.img`
  border-radius: ${props => props.theme.borderRadius}px;
  height: auto;
  margin-right: 20px;
  width: 51%;

  ${props => props.theme.media.md} {
    margin: 0px auto 20px;
    width: 100%;
  }
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

export const TextContent = styled.div``;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  margin-bottom: 12px;

  ${props => props.theme.media.md} {
    font-size: 2rem;
    margin-bottom: 15px;
    justify-content: center;
  }

  ${props => props.theme.media.sm} {
    font-size: 1.5rem;
  }
`;

export const ExternalLink = styled.a`
  transition: opacity 0.2s;
  margin-left: 10px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Description = styled.p`
  font-size: 0.85rem;
  line-height: 1.3rem;
  color: ${props => props.theme.colors.text.dark};

  ${props => props.theme.media.md} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 15px;
    line-height: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  ${props => props.theme.media.md} {
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    max-width: 500px;
  }

  ${props => props.theme.media.sm} {
    width: 100%;
  }
`;

export const Button = styled(StyledButton)`
  width: 49%;
`;
