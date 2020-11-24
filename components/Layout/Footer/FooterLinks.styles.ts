import styled from "styled-components";
import { StyledLinkText } from "components/Shared/StyledLinkText";

export const Container = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50px;
  height: 50px;

  ${props => props.theme.media.md} {
    height: 134px;
    flex-direction: column;
    justify-content: space-between;
    width: 65px;
    top: 140px;
    left: calc(52%);
  }
`;

export const Item = styled.li`
  padding: 10px 30px;

  &:nth-of-type(2) {
    margin-right: 80px;
  }

  &:nth-of-type(3) {
    margin-left: 80px;
  }

  ${props => props.theme.media.md} {
    padding: 0;
    margin: 0 !important;
    text-align: left;
    width: 100%;
  }
`;

export const Text = styled(StyledLinkText)`
  ${props => props.theme.media.md} {
    text-align: left;
    font-size: 1.1rem;
  }
`;
