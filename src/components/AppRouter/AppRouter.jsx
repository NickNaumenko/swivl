import User from 'features/User/User';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Users from '../../features/Users/Users';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route path="/:username">
        <User />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
