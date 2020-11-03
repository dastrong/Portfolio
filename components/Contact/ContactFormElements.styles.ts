import styled, { css } from "styled-components";
import AnimatedUnderlineEffect from "components/Shared/_css/AfterStyles";

const errorOutline = css`
  &:invalid {
    outline: 2px solid red;
    outline-offset: -2px;
  }
`;

const ReusableStyles = css<{ error?: boolean; hasBeenFocused: boolean }>`
  background-color: ${props => props.theme.colors.background.main}cf;
  color: ${props => props.theme.colors.text.dark};
  position: relative;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-family: inherit;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  outline: none;

  ${props => props.hasBeenFocused && errorOutline}

  ${props => props.theme.media.md} {
    font-size: 1.2rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  overflow: hidden;
  width: 100%;
  color: ${props => props.theme.colors.text.light};
  margin: 0 0 30px;
  font-size: 1.8rem;

  ${AnimatedUnderlineEffect};

  ${props => props.theme.media.md} {
    font-size: 1.5rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  ${ReusableStyles}
  font-size: 1.6rem;
`;

export const Textarea = styled.textarea`
  ${ReusableStyles}
  font-size: 1.2rem;
  resize: none;
`;
