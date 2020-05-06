import React, { useState } from "react";
import styled from "styled-components";
import ContactFormButton from "./ContactFormButton";
import { Input, Textarea } from "./ContactFormElements";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    console.log(error, isPending);

    try {
      e.preventDefault();
      setIsPending(true);

      // await submission here

      setButtonText("Sent");
      setIsPending(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsPending(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        required
        text="Your name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        required
        text="Your email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Textarea
        required
        text="Your message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <ContactFormButton
        disabled={!(name && email && message)}
        type="submit"
        primary
      >
        {buttonText}
      </ContactFormButton>
    </StyledForm>
  );
}
