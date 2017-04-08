import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';
import NotFoundPage from './pages/NotFoundPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
