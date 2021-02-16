import User from 'features/User/User';
import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import Users from '../../features/Users/Users';

const AppRouter = () => (
  <Router>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/username">User</NavLink>
    </nav>
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
