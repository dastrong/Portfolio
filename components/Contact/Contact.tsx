import React from "react";
import PageHead from "components/Shared/PageHead";
import styled from "styled-components";
import Header from "components/Shared/Header";
import { FaPhone, FaEnvelope, FaWifi } from "react-icons/fa";
import { externalLinks } from "utils";
import { StyledLinkIcon } from "components/Shared/StyledLinkIcon";
import ContactForm from "./ContactForm";
import * as Styled from "./Contact.styles";

const StyledListInfo = styled.ul`
  list-style-type: none;
`;

const StyledListInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;

  svg {
    margin-right: 10px;
  }
`;

const StyledListLinks = styled.ul`
  list-style-type: none;
`;

const StyledListLinksItem = styled.li``;

const AvailabilityList = styled.ul`
  color: ${props => props.theme.colors.text.main};
  list-style-type: none;
  margin-left: 20px;
`;

const AvailabilityListItem = styled.li`
  text-align: center;
  margin: 5px 0;

  p {
    font-size: 0.8rem;
  }
`;

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact"
        description="Come check out how Daniel Strong can help you, your team or company."
      />

      <Header>Contact Me</Header>

      <Styled.WholeContainer>
        <Styled.ContentContainer>
          <StyledListInfo>
            <StyledListInfoItem>
              <FaWifi size="25" />
              Availability:
              <AvailabilityList>
                <AvailabilityListItem>
                  Remote Work
                  <p>Message to discuss</p>
                </AvailabilityListItem>
                <AvailabilityListItem>
                  On Site
                  <p>May 1st, 2021</p>
                </AvailabilityListItem>
              </AvailabilityList>
            </StyledListInfoItem>
            <StyledListInfoItem>
              <FaPhone size="25" />
              <a href="tel:+8201089801619">+82 010-8980-1619</a>
            </StyledListInfoItem>
            <StyledListInfoItem>
              <FaEnvelope size="25" />
              <a href="mailto:danielstrong.ds@gmail.com">
                danielstrong.ds@gmail.com
              </a>
            </StyledListInfoItem>
          </StyledListInfo>

          {/* <StyledListLinks>
            {externalLinks.map(({ Icon, href }) => (
              <StyledListLinksItem key={href}>
                <StyledLinkIcon href={href}>
                  <Icon size="30" />
                </StyledLinkIcon>
              </StyledListLinksItem>
            ))}
          </StyledListLinks> */}
        </Styled.ContentContainer>

        <Styled.ContentContainer>
          <ContactForm />
        </Styled.ContentContainer>
      </Styled.WholeContainer>
    </>
  );
}
