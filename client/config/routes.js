import React       from 'react';
import Main        from '../containers/Main.js';
import HomePage    from '../containers/HomePage.js';
import CounterPage from '../containers/CounterPage.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomePage} />
      <Route path='/counter' component={CounterPage}/>
    </Route>
  </Router>
);
