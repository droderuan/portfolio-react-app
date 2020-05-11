import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              About Me
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">
              Skills
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              Contacts
              <hr />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
