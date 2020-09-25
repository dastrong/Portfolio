import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1rem 0;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

  ${props => props.theme.media.xs} {
    flex-direction: column;

    &:last-child:not(svg) {
      flex-direction: column-reverse;
    }
  }
`;

export const TextContainer = styled.div<{ direction: string }>`
  text-align: ${props => props.direction};

  ${props => props.theme.media.xs} {
    text-align: center;
  }
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
    margin: 0 0 0.5rem;
  }
`;
