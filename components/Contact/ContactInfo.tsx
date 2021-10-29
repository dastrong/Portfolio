import React from "react";
import { FaWifi } from "react-icons/fa";
import * as Styled from "./ContactInfo.styles";
import { ContactTypes } from "./ContactTypes";

export default function ContactInfo({
  availability_color,
  availability_title,
  availability_permanent,
  availability_temporary,
}: ContactTypes) {
  return (
    <Styled.Availability>
      <FaWifi color={availability_color} title={availability_title} />
      <Styled.AvailabilityHeader>Work Availability:</Styled.AvailabilityHeader>
      <Styled.AvailabilityItem>
        Permanent: {availability_permanent}
      </Styled.AvailabilityItem>
      <Styled.AvailabilityItem>
        Contract: {availability_temporary}
      </Styled.AvailabilityItem>
    </Styled.Availability>
  );
}
