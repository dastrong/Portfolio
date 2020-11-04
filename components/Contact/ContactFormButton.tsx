import React, { ButtonHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { StyledButton as Button } from "components/Shared/StyledButton";

const StyledButton = styled(Button)<{ primary: boolean }>`
  width: 11rem;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${props => props.theme.media.lg} {
    font-size: 1.4rem;
  }

  ${props => props.theme.media.md} {
    font-size: 1.3rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1.2rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;

const LoaderAnimation = keyframes`
  from { transform: rotate(0deg); } 
  to { transform: rotate(360deg); }
  `;

const StyledLoader = styled(FaSpinner)<{ primary: boolean }>`
  color: ${props => (props.primary ? "white" : props.theme.colors.pink)};
  animation: ${LoaderAnimation} 2s infinite linear;
  height: 1rem;
  width: 1rem;
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
    <StyledButton as="button" type="button" {...props} primary={primary}>
      {props.pending ? <StyledLoader primary={!!primary} /> : children}
    </StyledButton>
  );
}
