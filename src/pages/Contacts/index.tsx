import React from 'react';
import { MdEmail } from 'react-icons/md';

import { Container } from './styles';

import GithubICon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';

const Contacts: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <a
            href="https://github.com/droderuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubICon} alt="Github icon" />
            <p>My Github</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ruan-ferreira-87a15a180/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin icon" />
            <p>My Linkedin</p>
          </a>
        </li>
        <li>
          <MdEmail size={120} color="#82a2de" />
          <p>ruan.fer.gui@gmail.com</p>
        </li>
      </ul>
    </Container>
  );
};

export default Contacts;
