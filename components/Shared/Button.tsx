import styled, { css } from "styled-components";

export const ButtonStyles = css<{ primary: boolean }>`
  border: 2px solid
    ${props =>
      props.primary ? props.theme.colors.blue : props.theme.colors.pink};
  background-color: ${props =>
    props.primary ? props.theme.colors.blue : props.theme.colors.pink + "00"};
  color: ${props => (props.primary ? "white" : props.theme.colors.pink)};
  font-size: 1.4rem;
  border-radius: 25px;
  height: 50px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  display: flex;
  justify-content: center;
`;

export const StyledButtonLink = styled.a`
  ${ButtonStyles}
`;
