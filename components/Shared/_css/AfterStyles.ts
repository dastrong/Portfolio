import { css } from "styled-components";

// provides an underline animation from left to right
export default css`
  &:after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.theme.colors.accent};
    transform: translateX(-100%);
    opacity: 0;
    /* just as the translateX is finishing fade the line out quickly */
    transition: transform 0.25s, opacity 0.05s 0.2s;
  }

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    &:after {
      transition: transform 0.25s, opacity 0s 0s;
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
