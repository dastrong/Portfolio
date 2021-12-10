import styled from "styled-components";
import RemoveBookendStyles from "components/Shared/_css/RemoveBookendStyles";
import { StyledButton } from "components/Shared/StyledButton";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-width: 300px;
  max-width: ${props => props.theme.width.md}px;

  ${RemoveBookendStyles}
`;

export const Button = styled(StyledButton)<{ inView: boolean }>`
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  transform: translateY(${props => (props.inView ? 0 : 40)}px);
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: transform 0.2s, opacity 0.2s;
  width: 250px;
  display: flex;
  justify-content: space-around;
`;
