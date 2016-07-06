import React         from 'react';
import MainContainer from '../containers/MainContainer.js';
import HomeContainer from '../containers/HomeContainer.js';
import PageContainer from '../containers/PageContainer.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='/page' component={PageContainer}/>
    </Route>
  </Router>
);
