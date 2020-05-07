import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import useOnBlur from "hooks/useOnBlur";
import * as Styled from "./ContactFormElements.styles";

type Props = {
  text: string;
  error?: boolean;
  wasReset: boolean;
};

export function Input({
  text,
  wasReset,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
  const { hasBeenFocused, onBlur } = useOnBlur(wasReset);

  return (
    <Styled.Label>
      {text}
      <Styled.Input
        {...props}
        hasBeenFocused={hasBeenFocused}
        onBlur={onBlur}
      />
    </Styled.Label>
  );
}

export function Textarea({
  text,
  wasReset,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & Props) {
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
  const { hasBeenFocused, onBlur } = useOnBlur(wasReset);

  return (
    <Styled.Label>
      {text}
      <Styled.Textarea
        ref={ref}
        {...props}
        hasBeenFocused={hasBeenFocused}
        onBlur={onBlur}
      />
    </Styled.Label>
  );
}
