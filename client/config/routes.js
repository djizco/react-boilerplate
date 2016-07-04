import React         from 'react';
import MainContainer from '../containers/MainContainer.js';
import HomeContainer from '../containers/HomeContainer.js';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);
