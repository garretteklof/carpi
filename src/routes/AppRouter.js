import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import AddDiem from '../components/AddDiem';
import EditDiem from '../components/EditDiem';
import ActivityLineGraph from '../components/ActivityLineGraph';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddDiem} />
        <PrivateRoute path="/edit/:id" component={EditDiem} />
        <PrivateRoute path="/graph/:activity" component={ActivityLineGraph} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
