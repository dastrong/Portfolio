import React from "react";
import { FaPhone, FaEnvelope, FaWifi } from "react-icons/fa";
import * as Styled from "./ContactInfo.styles";
import { ContactTypes } from "./ContactTypes";

export default function ContactInfo({
  email,
  phone_number,
  availability_color,
  availability_title,
  availability_permanent,
  availability_temporary,
}: ContactTypes) {
  return (
    <Styled.Container>
      <Styled.DirectItem>
        <FaPhone />
        <a href={`tel:${phone_number}`}>{phone_number}</a>
      </Styled.DirectItem>

      <Styled.DirectItem>
        <FaEnvelope />
        <a href={`mailto:${email}`}>{email}</a>
      </Styled.DirectItem>

      <Styled.Availability>
        <FaWifi color={availability_color} title={availability_title} />
        <Styled.AvailabilityHeader>
          Work Availability:
        </Styled.AvailabilityHeader>
        <Styled.AvailabilityItem>
          Permanent: {availability_permanent}
        </Styled.AvailabilityItem>
        <Styled.AvailabilityItem>
          Contract: {availability_temporary}
        </Styled.AvailabilityItem>
      </Styled.Availability>
    </Styled.Container>
  );
}
