import React from 'react';
import { useSpring } from 'react-spring';

import { Container } from './styles';

interface CardProps {
  color: string;
  image: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ color, text, image, ...props }) => {
  const transform = useSpring({
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  });

  return (
    <Container style={transform} color={color} {...props}>
      <img src={image} alt="skill" />
      <div>
        <span>{text}</span>
      </div>
    </Container>
  );
};

export default Card;
