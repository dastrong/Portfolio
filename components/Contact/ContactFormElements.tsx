import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import * as Styled from "./ContactFormElements.styles";

export function Input({
  text,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { text: string }) {
  return (
    <Styled.Label>
      {text}
      <Styled.Input {...props} />
    </Styled.Label>
  );
}

export function Textarea({
  text,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { text: string }) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const lineHeight = 28;
    const minRows = 4;
    const maxRows = 12;

    // reset rows to minimum
    ref.current.rows = minRows;

    // get the total scrollable height
    const newRowCount = Math.floor(ref.current.scrollHeight / lineHeight);

    // keeps the rows within our min and max ranges
    const rows =
      newRowCount > maxRows
        ? maxRows
        : newRowCount < minRows
        ? minRows
        : newRowCount;

    // set new rows
    ref.current.rows = rows;
  }, [props.value]);

  return (
    <Styled.Label>
      {text}
      <Styled.Textarea ref={ref} {...props} />
    </Styled.Label>
  );
}
