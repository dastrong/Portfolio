import React from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import matter from "gray-matter";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import ContactForm from "components/Contact/ContactForm";
import ContactInfo from "components/Contact/ContactInfo";
import { ContactTypes } from "components/Contact/ContactTypes";

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

export default function Contact({ data }: { data: ContactTypes }) {
  return (
    <>
      <PageHead
        title="Contact"
        description="Come check out how Daniel Strong can help you, your team or company."
      />

      <Header>Contact Me</Header>

      <PageContainer>
        <ContactForm />
        <ContactInfo {...data} />
      </PageContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mark = await import("content/pages/contact.md");
  const { data } = matter(mark.default);
  return { props: { data } };
};
