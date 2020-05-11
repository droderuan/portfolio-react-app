import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Bar } from './styles';

interface BarProps {
  zIndex: number;
  position: number;
  delay: number;
  side: boolean;
}

interface BackgroundColors {
  color: string[];
}

const BarBackgrond: React.FC<BarProps> = ({
  zIndex,
  position,
  delay,
  side,
}) => {
  const transition = useSpring({
    from: { transform: side ? 'rotate(-50deg)' : 'rotate(-128deg)' },
    to: { transform: side ? 'rotate(-128deg)' : 'rotate(-50deg)' },
    delay,
  });

  const bgTransition = useSpring({
    from: { background: '#a8a8a8' },
    delay: delay * 1.5,
    to: { background: '#82a2de' },
  });

  return (
    <Bar zIndex={zIndex} position={position} style={transition}>
      <animated.div style={bgTransition} />
    </Bar>
  );
};

export default BarBackgrond;
