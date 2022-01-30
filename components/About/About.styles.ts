import styled from "styled-components";
import { StyledTextContainer } from "components/Shared/StyledTextContainer";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  min-width: 300px;
  max-width: ${props => `${props.theme.width.lg}px`};

  ${props => props.theme.media.md} {
    max-width: ${props => `${props.theme.width.md}px`};
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled(StyledTextContainer)`
  width: 75%;
  margin: 0 10px;
  margin-left: 50px;

  ${props => props.theme.media.md} {
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

export const ImageWrapper = styled.div`
  display: block;
  width: 40%;
  line-height: 0;
  min-width: 300px;
  border-radius: 5rem;
  box-shadow: 0px 0px 1px 0px ${props => props.theme.colors.accent},
    0px 0px 0px 3px ${props => props.theme.colors.accent} inset;
  border: 3px solid ${props => props.theme.colors.accent};

  * {
    border-radius: inherit;
  }

  ${props => props.theme.media.sm} {
    min-width: 250px;
  }
`;

export const Text = styled.p`
  margin: 20px 0;

  ${props => props.theme.media.md} {
    text-align: center;
  }
`;
