import styled from "styled-components";
import ButtonStyles from "components/Shared/_css/ButtonStyles";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 25px;

  button {
    width: 125px;

    &:first-child {
      margin-right: 5px;
    }
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
