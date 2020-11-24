import styled, { css } from "styled-components";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 300px;
  max-width: ${props => `${props.theme.width.lg}px`};

  ${props => props.theme.media.lg} {
    max-width: ${props => `${props.theme.width.md}px`};
    width: 90%;
    flex-direction: column;
  }
`;

export const TextContainer = styled(StyledTextContainer)`
  width: 75%;
  margin: 0 10px;
  margin-left: 50px;

  ${props => props.theme.media.lg} {
    margin: 20px auto 0;
  }

  ${props => props.theme.media.sm} {
    width: 100%;
  }

  ${props => props.theme.media.xs} {
    margin: 20px 5px 0;
    max-width: 375px;
  }
`;

export const ImageContainer = css`
  width: 40%;
  min-width: 300px;
  border-radius: 155px;
  box-shadow: 0px 0px 1px 0px ${props => props.theme.colors.accent};
  border: 3px solid ${props => props.theme.colors.accent};

  ${props => props.theme.media.sm} {
    min-width: 250px;
  }
`;

export const Text = styled.p`
  margin: 20px 0;

  ${props => props.theme.media.lg} {
    text-align: center;
  }
`;
