import styled from "styled-components";
import ButtonStyles from "components/Shared/_css/ButtonStyles";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 70%;
  min-width: 250px;

  ${props => props.theme.media.sm} {
    display: flex;
  }

  a:first-child {
    margin-bottom: 8px;
  }
`;

export const Anchor = styled.a`
  ${ButtonStyles}

  ${props => props.theme.media.sm} {
    font-size: 0.9rem;
  }
`;
