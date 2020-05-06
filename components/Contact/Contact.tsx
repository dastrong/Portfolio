import React from "react";
import styled from "styled-components";

import PageHead from "components/Shared/PageHead";
import Header from "components/Shared/Header";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

// all these will me managed by our CMS
const staticProps = {
  permanent: "May 1st, 2021",
  contract: "Message to discuss",
  email: "danielstrong.ds@gmail.com",
  phone: "+82-10-8980-1619",
  availabilityColor: "orange",
  availabilityTitle: "Passively searching for employment",
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  min-width: 310px;
  max-width: ${props => props.theme.width.md}px;
`;

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact"
        description="Come check out how Daniel Strong can help you, your team or company."
      />

      <Header>Contact Me</Header>

      <PageContainer>
        <ContactForm />
        <ContactInfo {...staticProps} />
      </PageContainer>
    </>
  );
}
