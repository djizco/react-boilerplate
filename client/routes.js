import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/layouts/Main';
import HomePage from './components/pages/HomePage';
import CounterPage from './components/pages/CounterPage';
import TodoPage from './components/pages/TodoPage';
import LostPage from './components/pages/LostPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="*" component={LostPage} />
  </Route>
);
