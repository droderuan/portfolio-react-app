import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

import BarBackground from './BarBackground';

interface BackgroundProps {
  url: string;
  side: boolean;
}

const Background: React.FC = () => {
  const { pathname } = useLocation();

  const [props, setProps] = useState<BackgroundProps>({
    url: pathname,
    side: false,
  });

  useEffect(() => {
    if (props.url !== pathname) {
      setProps({ url: pathname, side: !props.side });
    }
  }, [pathname, props]);
  return (
    <Container>
      <BarBackground zIndex={2} position={0} delay={400} side={props.side} />
      <BarBackground zIndex={1} position={0.5} delay={200} side={props.side} />
      <BarBackground zIndex={0} position={1} delay={0} side={props.side} />
    </Container>
  );
};

export default Background;
