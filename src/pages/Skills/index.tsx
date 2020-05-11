import React from 'react';

import Card from '../../components/Card';
import { Container } from './styles';

import ReactImage from '../../assets/react.png';
import ReactNativeImage from '../../assets/reactNative.png';
import NodeImage from '../../assets/nodejs.png';
import TypescriptImage from '../../assets/typescript.png';
import DjangoImage from '../../assets/django.png';

const Skills: React.FC = () => {
  return (
    <Container>
      <Card text="ReactJS" color="#61DAFB" image={ReactImage} />
      <Card text="NodeJs" color="#6BBF47" image={NodeImage} />
      <Card text="React Native" color="#61DAFB" image={ReactNativeImage} />
      <Card text="Typescript" color="#007ACC" image={TypescriptImage} />
      <Card text="Django" color="#103E2E" image={DjangoImage} />
    </Container>
  );
};

export default Skills;
