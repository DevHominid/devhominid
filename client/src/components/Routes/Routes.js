import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConfig from '../../config/routes';

const Routes = () => {
  const listRoutes = routeConfig.map((route) => (
    <Route
      exact
      component={route.component}
      key={route.id}
      path={route.path}
    />
  ));

  return (
    <Switch>{listRoutes}</Switch>
  );
};

export default Routes;
