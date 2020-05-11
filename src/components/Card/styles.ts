import styled from 'styled-components';
import { animated } from 'react-spring';

interface CardProps {
  color: string;
}

export const Container = styled(animated.div)<CardProps>`
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  background: #fcf8f8;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

  img {
    width: min-content;
    margin: auto 0;
  }

  div {
    width: 100%;
    height: 100px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => `background: ${props.color};`}
    border-radius: 0 0 10px 10px;

    span {
      font-family: 'Quicksand', sans-serif;
      font-size: 38px;
    }
  }
`;
