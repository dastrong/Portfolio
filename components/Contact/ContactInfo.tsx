import React from "react";
import { FaPhone, FaEnvelope, FaWifi } from "react-icons/fa";
import * as Styled from "./ContactInfo.styles";

export default function ContactInfo({
  permanent,
  contract,
  email,
  phone,
  availabilityColor,
  availabilityTitle,
}: {
  permanent: string;
  contract: string;
  email: string;
  phone: string;
  availabilityColor: string;
  availabilityTitle: string;
}) {
  return (
    <Styled.Container>
      <Styled.DirectItem>
        <FaPhone />
        <a href={`tel:${phone}`}>{phone}</a>
      </Styled.DirectItem>

      <Styled.DirectItem>
        <FaEnvelope />
        <a href={`mailto:${email}`}>{email}</a>
      </Styled.DirectItem>

      <Styled.Availability>
        <FaWifi color={availabilityColor} title={availabilityTitle} />
        <Styled.AvailabilityHeader>
          Work Availability:
        </Styled.AvailabilityHeader>
        <Styled.AvailabilityItem>
          Permanent: {permanent}
        </Styled.AvailabilityItem>
        <Styled.AvailabilityItem>Contract: {contract}</Styled.AvailabilityItem>
      </Styled.Availability>
    </Styled.Container>
  );
}
