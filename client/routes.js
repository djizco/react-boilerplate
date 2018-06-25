import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '_layouts/Main';
import HomePage from '_pages/HomePage';
import CounterPage from '_pages/CounterPage';
import TodoPage from '_pages/TodoPage';
import LostPage from '_pages/LostPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="*" component={LostPage} />
  </Route>
);
