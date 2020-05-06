import styled, { css } from "styled-components";
import AnimatedUnderlineEffect from "components/Shared/_css/AfterStyles";

const ReusableStyles = css`
  background-color: ${props => props.theme.colors.background.main}cf;
  color: ${props => props.theme.colors.text.dark};
  position: relative;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-family: inherit;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid
    ${props =>
      props.theme.isDarkTheme
        ? props.theme.colors.blue
        : props.theme.colors.pink};

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
