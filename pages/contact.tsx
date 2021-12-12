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
    <PageHead
      title="Contact Daniel Strong"
      description="Reach out and send Daniel Strong a personal email."
      ogImage={encodeURI(
        `https://danielstrong.tech/api/og-image?type=default&title=Shoot me an email&heading=Want to get in touch?&url=contact`
      )}
    >
      <StyledHeader underlined>Contact Me</StyledHeader>

      <PageContainer>
        <ContactForm />
        <ContactInfo {...data} />
      </PageContainer>
    </PageHead>
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
