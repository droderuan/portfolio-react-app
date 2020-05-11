import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Contacts from '../pages/Contacts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={AboutMe} />
    <Route path="/skills" component={Skills} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;
