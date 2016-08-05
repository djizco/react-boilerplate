import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/Main.js';
import HomePage from './containers/HomePage.js';
import CounterPage from './containers/CounterPage.js';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
