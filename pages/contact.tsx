import React from "react";
import type { InferGetStaticPropsType } from "next";
import styled from "styled-components";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import { StyledHeader } from "components/Shared/StyledHeader";
import ContactForm from "components/Contact/ContactForm";
import ContactInfo from "components/Contact/ContactInfo";
import type { ContactTypes } from "components/Contact/Contact.types";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  min-width: 300px;
  max-width: ${props => props.theme.width.md}px;
`;

export default function Contact({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageHead
        title="Contact"
        description="Reach out to learn how I can help you, your team or company."
      />

      <StyledHeader underlined>Contact Me</StyledHeader>

      <PageContainer>
        <ContactForm />
        <ContactInfo {...data} />
      </PageContainer>
    </>
  );
}

export const getStaticProps = async () => {
  const mark = await import("content/pages/contact.md");
  const { data } = matter(mark.default);

  return {
    props: {
      data: data as ContactTypes,
    },
  };
};
