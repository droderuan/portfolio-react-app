import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Section } from './styles';

import Me from '../../assets/me.png';

const AboutMe: React.FC = () => {
  const transform = useSpring({
    from: {
      transform: 'translateY(50px)',
      opacity: 0.5,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  });

  return (
    <Section>
      <animated.div style={transform}>
        <p>
          Quisque porttitor porttitor euismod. Sed ac ipsum vitae quam
          sollicitudin interdum. Fusce vel imperdiet ipsum. Mauris efficitur
          cursus turpis non tempor. Maecenas vitae ultrices lacus, vel bibendum
          neque. Curabitur justo odio, egestas non rhoncus sit amet, pulvinar
          scelerisque eros. Sed sollicitudin imperdiet dui, ut consectetur sem
          lobortis nec. Morbi ac sollicitudin lectus, eu tincidunt purus.
          Quisque porttitor porttitor euismod. Sed ac ipsum vitae quam
          sollicitudin interdum. Fusce vel imperdiet ipsum. Mauris efficitur
          cursus turpis non tempor. Maecenas vitae ultrices lacus, vel bibendum
          neque. Curabitur justo odio, egestas non rhoncus sit amet, pulvinar
          scelerisque eros. Sed sollicitudin imperdiet dui, ut consectetur sem
          lobortis nec. Morbi ac sollicitudin lectus, eu tincidunt purus.
          Quisque porttitor porttitor euismod. Sed ac ipsum vitae quam
          sollicitudin interdum. Fusce vel imperdiet ipsum. Mauris efficitur
          cursus turpis non tempor. Maecenas vitae ultrices lacus, vel bibendum
          neque. Curabitur justo odio, egestas non rhoncus sit amet, pulvinar
          scelerisque eros. Sed sollicitudin imperdiet dui, ut consectetur sem
          lobortis nec. Morbi ac sollicitudin lectus, eu tincidunt purus.
        </p>
      </animated.div>
      <animated.div style={transform}>
        <img src={Me} alt="Me" />
      </animated.div>
    </Section>
  );
};

export default AboutMe;
