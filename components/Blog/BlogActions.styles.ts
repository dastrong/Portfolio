import styled, { css } from "styled-components";
import EnterAnimationStyles from "components/Shared/_css/EnterAnimationStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 1rem 0;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  /* adds auto margin to keep actions to their edge */
  margin: ${props =>
    props.direction === "toLeft" ? "0 auto 0 0" : "0 0 0 auto"};

  opacity: 0;
  transform: translateX(
    ${props => (props.direction === "toLeft" ? "60px" : "-60px")}
  );
  transition: opacity 600ms cubic-bezier(0.58, 0.64, 0.54, 1.93),
    transform 600ms cubic-bezier(0.58, 0.64, 0.54, 1.93);

  ${props => props.theme.media.sm} {
    transform: translateX(
      ${props => (props.direction === "toLeft" ? "30px" : "-30px")}
    );
    ${EnterAnimationStyles};
  }

  ${EnterAnimationStyles};

  ${props => props.theme.media.xs} {
    ${props =>
      props.direction === "toLeft"
        ? css`
            flex-direction: column;
            align-items: flex-start;
          `
        : css`
            flex-direction: column-reverse;
            align-items: flex-end;
          `}
  }
`;

export const TextContainer = styled.div<{ align: string }>`
  text-align: ${props => props.align};
`;

export const Header = styled.h5`
  text-decoration: solid underline ${props => props.theme.colors.accent};
`;

export const Title = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  ${props => props.theme.media.sm} {
    max-width: 150px;
  }

  ${props => props.theme.media.xs} {
    max-width: 100px;
  }
`;

export const Arrow = css`
  color: ${props => props.theme.colors.accent};

  ${props => props.theme.media.xs} {
    margin: 0 0 0.25rem;
  }
`;
