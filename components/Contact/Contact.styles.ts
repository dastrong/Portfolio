import styled from "styled-components";

export const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  ${props => props.theme.media.md} {
    flex-direction: column-reverse;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 310px;
  max-width: 350px;
  margin: 10px 20px;
  color: ${props => props.theme.colors.text.main};
`;
