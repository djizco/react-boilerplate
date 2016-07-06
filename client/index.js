import React from 'react';

import { render }      from 'react-dom';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root       from './containers/Root.js';
import styles     from './main.css';
import configureStore from './store/configureStore';

let store = configureStore();
let history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
