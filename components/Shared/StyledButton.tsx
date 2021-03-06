import styled, { css } from "styled-components";

export const StyledButton = styled.a<{ primary?: boolean }>`
  box-sizing: border-box;
  border-radius: 2rem;
  padding: 0.75rem 0.25rem;
  cursor: pointer;
  min-width: 100px;
  transition: opacity 0.2s;
  backface-visibility: hidden;
  line-height: 1;
  font-size: 1rem;
  display: inline-block;
  text-align: center;

  // styles that depend on primary prop
  ${({ theme, primary }) =>
    primary
      ? css`
          border: 2px solid ${theme.colors.blue};
          background-color: ${theme.colors.blue};
          color: #fff;
          font-weight: 300;
        `
      : css`
          border: 2px solid ${theme.colors.pink};
          background-color: transparent;
          color: ${theme.colors.pink};
          font-weight: 600;
        `}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
