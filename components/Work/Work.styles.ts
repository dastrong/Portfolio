import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  min-width: 310px;
  max-width: ${props => props.theme.width.md}px;
`;
