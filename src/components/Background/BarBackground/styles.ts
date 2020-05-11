import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface BarProps {
  zIndex: number;
  position: number;
}

export const Bar = styled(animated.div)<BarProps>`
  height: 150%;
  width: 70%;
  top: -75%;
  left: -21%;
  position: absolute;
  transform-origin: 100% 50%;
  transform: rotateZ(-45deg);
  ${props =>
    css`
      z-index: ${props.zIndex};
    `}
  div {
    height: 100%;
    width: 350px;
    position: relative;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);

    ${props =>
      css`
        left: calc(350px * ${props.position});
      `}
  }
`;
