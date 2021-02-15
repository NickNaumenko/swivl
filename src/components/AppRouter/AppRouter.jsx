import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import UserPage from '../../features/Users/UserPage';
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
        <UserPage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
