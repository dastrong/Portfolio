import styled from "styled-components";
import { PlainLink } from "components/Shared/Links";

export const StyledLinkText = styled(PlainLink)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  transition: 0s 0s all;
  opacity: ${props => (props.isMenuOpen ? 1 : 0)};
  transform: ${props => `translateY(${props.isMenuOpen ? 0 : 10}px)`};
  color: ${props => props.theme.colors.text.main};

  &:after {
    content: "";
    height: 1.5px;
    width: 100%;
    background-color: ${props => props.theme.colors.accent};
    opacity: ${props => (props.isCurrentPage ? 1 : 0)};
    transform: ${props => `translateX(${props.isCurrentPage ? 0 : -100}%)`};
    transition: 0.25s transform, 0.5s opacity;
  }

  &:hover :after {
    opacity: 1;
    transform: translateX(0);
  }

  ${props => props.theme.media.md} {
    transition-duration: ${props => `${props.isMenuOpen ? 0.15 : 0}s`};
    transition-delay: ${props =>
      `${props.isMenuOpen ? props.index * 0.1 + 0.2 : 0}s`};
    transition-property: opacity;
    width: 100%;
    font-size: 1.4rem;

    &:after {
      opacity: 0 !important;
    }
  }
`;
