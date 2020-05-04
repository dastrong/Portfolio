/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ContactButtonSubmit from "components/Contact/ContactButtonSubmit";
import * as Styled from "./ContactForm.styles";

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
    <Styled.StyledForm onSubmit={handleSubmit}>
      <Styled.StyledLabel>
        Your name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Styled.StyledLabel>
      <Styled.StyledLabel>
        Your email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Styled.StyledLabel>
      <Styled.StyledLabel>
        Your message
        <textarea value={message} onChange={e => setMessage(e.target.value)} />
      </Styled.StyledLabel>

      <ContactButtonSubmit type="submit">{buttonText}</ContactButtonSubmit>
    </Styled.StyledForm>
  );
}
