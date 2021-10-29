import styled from "styled-components";

export const Availability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  width: 100%;
  margin: 40px 0 0;

  svg {
    margin-bottom: 5px;
    height: 35px;
    width: 35px;
    color: ${props => props.theme.colors.text.light}73;
  }

  ${props => props.theme.media.lg} {
    margin: 35px 0 0;
    font-size: 1.6rem;

    svg {
      height: 30px;
      width: 30px;
    }
  }

  ${props => props.theme.media.md} {
    margin: 30px 0 0;
    font-size: 1.4rem;
  }

  ${props => props.theme.media.sm} {
    font-size: 1.2rem;

    svg {
      height: 25px;
      width: 25px;
    }
  }
`;

export const AvailabilityHeader = styled.div`
  font-size: 1.1em;
  color: ${props => props.theme.colors.text.light};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.colors.blue};
`;

export const AvailabilityItem = styled.div`
  font-size: 0.8em;
  margin: 10px 0 0;
  color: ${props => props.theme.colors.text.dark};
`;
