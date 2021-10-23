import styled, { css } from "styled-components";
import { gradientWidth, dimensions } from "components/Home/_variables";

const ContainerStyles = css`
  ${props => props.theme.centered}
  position: absolute;
  width: calc(${dimensions.cornerBox.width} * 100%);
  height: calc(${dimensions.cornerBox.height} * 100%);

  ${props => props.theme.media.md} {
    display: none;
  }
`;

const TopLeftStyles = css`
  top: 0;
  left: 0;
`;
const TopRightStyles = css`
  top: 0;
  right: 0;
`;
const BottomLeftStyles = css`
  bottom: 0;
  left: 0;
`;
const BottomRightStyles = css`
  bottom: 0;
  right: 0;
`;

const TopLeftToBottomRightRadiusStyles = css`
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const TopRightToBottomLeftRadiusStyles = css`
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TopLeftGradient = styled.div`
  ${ContainerStyles}
  ${TopLeftStyles}
  ${TopLeftToBottomRightRadiusStyles}
`;
export const TopRightGradient = styled.div`
  ${ContainerStyles}
  ${TopRightStyles}
  ${TopRightToBottomLeftRadiusStyles}
`;
export const BottomLeftGradient = styled.div`
  ${ContainerStyles}
  ${BottomLeftStyles}
  ${TopRightToBottomLeftRadiusStyles}
`;
export const BottomRightGradient = styled.div`
  ${ContainerStyles}
  ${BottomRightStyles}
  ${TopLeftToBottomRightRadiusStyles}
`;

const CornerContainerStyles = css`
  position: absolute;
  background-color: ${props => props.theme.colors.background.main};
  height: calc(100% - ${gradientWidth}px);
  width: calc(100% - ${gradientWidth}px);
  transition: 0.2s background-color;
  ${props => props.theme.centered};

  &:hover {
    /* E6 is 90% opacity */
    background-color: ${props => props.theme.colors.background.main}E6;
  }
`;

export const TopLeftContainer = styled.div`
  ${CornerContainerStyles}
  ${TopLeftStyles}
  ${TopLeftToBottomRightRadiusStyles}
`;
export const TopRightContainer = styled.div`
  ${CornerContainerStyles}
  ${TopRightStyles}
  ${TopRightToBottomLeftRadiusStyles}
`;
export const BottomLeftContainer = styled.div`
  ${CornerContainerStyles}
  ${BottomLeftStyles}
  ${TopRightToBottomLeftRadiusStyles}
`;
export const BottomRightContainer = styled.div`
  ${CornerContainerStyles}
  ${BottomRightStyles}
  ${TopLeftToBottomRightRadiusStyles}
  justify-content: space-evenly;
  padding: 5px;
`;

export const Link = styled.a`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  ${props => props.theme.centered};
`;
