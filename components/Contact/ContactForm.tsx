import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ContactFormButton from "./ContactFormButton";
import { Input, Textarea } from "./ContactFormElements";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledThanks = styled.div`
  margin: -15px 0 15px;
  font-size: 1.1rem;
  padding: 0 10px;
  text-align: center;
`;

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [wasReset, setWasReset] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [showThanksMsg, setShowThanksMsg] = useState(false);
  const [{ name, email, message }, setValues] = useState(initialValues);

  const isDisabled = !name || !email || !message;

  const resetForm = () => {
    setWasReset(true);
    setValues(initialValues);
  };

  const handleChange = (name: string) =>
    useCallback(e => {
      e.persist();
      setWasReset(false);
      setValues(state => ({ ...state, [name]: e.target.value }));
    }, []);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    try {
      e.preventDefault();
      setIsPending(true);

      // await submission here
      await fetch("https://formspree.io/xlepezzz", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Contact form submission from ${name}`,
        }),
        headers: { "Content-Type": "application/json" },
      });

      resetForm();
      setShowThanksMsg(true);
      setButtonText("Submit");
      setIsPending(false);
    } catch (err) {
      console.log(err);
      setButtonText("Please try again");
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
        onChange={handleChange("name")}
        wasReset={wasReset}
      />

      <Input
        required
        text="Your email"
        type="email"
        value={email}
        onChange={handleChange("email")}
        wasReset={wasReset}
      />

      <Textarea
        required
        text="Your message"
        value={message}
        onChange={handleChange("message")}
        wasReset={wasReset}
      />

      {showThanksMsg && (
        <StyledThanks>
          Thanks for contacting me. I&apos;ll respond ASAP.
        </StyledThanks>
      )}

      <ContactFormButton
        primary
        type="submit"
        pending={isPending}
        disabled={isDisabled}
      >
        {buttonText}
      </ContactFormButton>
    </StyledForm>
  );
}
