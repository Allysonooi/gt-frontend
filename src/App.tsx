import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout';
import routes from 'constants/routes';

export default () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            path={path}
            render={() => <MainLayout>{component}</MainLayout>}
          />
        ))}
      </Switch>
    </Router>
  );
};
