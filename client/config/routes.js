import React         from 'react';
import Main from '../components/Main.js';
import HomeContainer from '../containers/HomeContainer.js';
import CounterContainer from '../containers/CounterContainer.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/counter' component={CounterContainer}/>
    </Route>
  </Router>
);
