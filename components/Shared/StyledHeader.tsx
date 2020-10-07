import styled, { css } from "styled-components";

export const StyledHeader = styled.h1<{ underlined?: boolean }>`
  font-size: 4rem;
  margin: 0 auto 2.5rem;
  text-align: center;
  ${({ underlined, theme }) =>
    underlined &&
    css`
      text-decoration: solid underline ${theme.colors.accent};
    `}

  ${props => props.theme.media.xl} {
    font-size: 3.75rem;
    margin-bottom: 2.25rem;
  }

  ${props => props.theme.media.lg} {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  ${props => props.theme.media.md} {
    font-size: 3rem;
    margin-bottom: 1.75rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 2.75rem;
    margin-bottom: 1.5rem;
  }

  ${props => props.theme.media.xs} {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;
