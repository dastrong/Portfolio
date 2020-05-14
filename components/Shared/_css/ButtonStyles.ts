import { css } from "styled-components";

export default css<{ primary?: boolean }>`
  border: 2px solid
    ${props =>
      props.primary ? props.theme.colors.blue : props.theme.colors.pink};
  background-color: ${props =>
    props.primary ? props.theme.colors.blue : "transparent"};
  color: ${props => (props.primary ? "white" : props.theme.colors.pink)};
  font-weight: ${props => (props.primary ? "400" : "bold")};
  box-sizing: border-box;
  border-radius: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
