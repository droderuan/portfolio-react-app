import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface BarProps {
  zIndex: number;
  position: number;
}

export const Bar = styled(animated.div)<BarProps>`
  height: 150%;
  width: 70%;
  top: -70%;
  left: -20%;
  position: absolute;
  transform-origin: 100% 50%;
  transition: all 200ms;

  ${props =>
    css`
      z-index: ${props.zIndex};
    `}

  @media all and (max-width: 1735px) {
    & {
      top: -65%;
    }
  }

  @media all and (max-width: 1620px) {
    & {
      top: -55%;
    }
  }

  @media all and (max-width: 1500px) {
    & {
      top: -45%;
    }
  }

  @media all and (max-width: 1360px) {
    & {
      top: -10%;
      left: -45%;
    }
  }

  div {
    height: 100%;
    width: 350px;
    position: relative;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);

    ${props =>
      css`
        left: calc(350px * ${props.position});
      `}

    @media all and (max-width: 1735px) {
      & {
        width: 300px;
        ${props =>
          css`
            left: calc(300px * ${props.position});
          `}
      }
    }

    @media all and (max-width: 1620px) {
      & {
        width: 250px;
        ${props =>
          css`
            left: calc(250px * ${props.position});
          `}
      }
    }

    @media all and (max-width: 1500px) {
      & {
        width: 200px;
        ${props =>
          css`
            left: calc(200px * ${props.position});
          `}
      }
    }
  }
`;
