import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/Main';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
