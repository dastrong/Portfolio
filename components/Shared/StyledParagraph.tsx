import styled from "styled-components";

export const StyledParagraph = styled.p`
  line-height: 1.5;
  margin-bottom: 0.5rem;

  &:only-child,
  &:last-child {
    margin-bottom: 0rem;
  }
`;
