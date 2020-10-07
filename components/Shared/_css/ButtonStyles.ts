import { css } from "styled-components";

export default css<{ primary?: boolean }>`
  border: 2px solid
    ${props =>
      props.primary ? props.theme.colors.blue : props.theme.colors.pink};
  background-color: ${props =>
    props.primary ? props.theme.colors.blue : "transparent"};
  color: ${props => (props.primary ? "white" : props.theme.colors.pink)};
  font-weight: ${props => (props.primary ? 300 : 600)};
  box-sizing: border-box;
  border-radius: 2rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  display: flex;
  justify-content: center;
  transition: opacity 0.2s;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.8;
  }
`;
