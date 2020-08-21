import styled from "styled-components";

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: -5px auto;
`;

export const StyledTag = styled.div<{ color?: string }>`
  font-size: 0.9rem;
  line-height: 0.9rem;
  border-radius: 0.9rem;
  padding: 6px 12px;
  margin: 5px;
  border: 1px solid ${props => props.theme.colors.accent}75;
  background-color: ${props => props.theme.colors.accent}0f;
  color: ${props => props.theme.colors.text.dark};
  box-shadow: 1.5px 1.5px 0.5px ${props => props.theme.colors.accent};
`;
