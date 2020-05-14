import styled from "styled-components";
import RemoveBookendStyles from "components/Shared/_css/RemoveBookendStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  min-width: 300px;
  max-width: ${props => props.theme.width.md}px;

  ${RemoveBookendStyles}
`;
