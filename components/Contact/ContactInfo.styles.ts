import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 40px 0 50px;

  svg {
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    color: ${props => props.theme.colors.text.light}73;
  }
`;

export const DirectItem = styled.div`
  margin: 10px 0;
  width: fit-content;
`;

export const Availability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  width: 100%;
  margin: 50px 0 0;
`;

export const AvailabilityHeader = styled.div`
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.colors.blue};
`;

export const AvailabilityItem = styled.div`
  font-size: 1rem;
  margin: 10px 0 0;
`;
