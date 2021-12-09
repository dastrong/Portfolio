import styled from "styled-components";

export const StyledSubHeading = styled.h2`
  margin: 2.5rem auto 1rem;
  font-size: 3rem;
  text-align: center;

  ${props => props.theme.media.xl} {
    font-size: 2.75rem;
    margin-bottom: 2.25rem;
  }

  ${props => props.theme.media.lg} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  ${props => props.theme.media.md} {
    font-size: 2.25rem;
    margin-bottom: 1.75rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
