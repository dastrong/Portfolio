import React, { ButtonHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import ButtonStyles from "components/Shared/_css/ButtonStyles";

const LoaderAnimation = keyframes`
  from { transform: rotate(0deg); } 
  to { transform: rotate(360deg); }
`;

const StyledLoader = styled(FaSpinner)<{ primary: boolean }>`
  position: absolute;
  color: ${props => (props.primary ? "white" : props.theme.colors.pink)};
  animation: ${LoaderAnimation} 2s infinite linear;
`;

const StyledButton = styled.button<{ primary: boolean }>`
  ${ButtonStyles}
  width: 200px;
  font-size: 1.4rem;
  line-height: 1.7rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function ContactButtonSubmit({
  children,
  primary = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  primary?: boolean;
  pending?: boolean;
}) {
  return (
    <StyledButton type="button" {...props} primary={primary}>
      {props.pending ? <StyledLoader primary={!!primary} /> : children}
    </StyledButton>
  );
}
