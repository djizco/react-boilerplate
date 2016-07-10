import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Root           from './containers/Root.js';
import styles         from './styles/main.css';
import scss           from './styles/main.scss';
import configureStore from './store/configureStore';

let historyType;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'){
  historyType = require('react-router').browserHistory;
} else {
  historyType = require('react-router').hashHistory;
}

let store = configureStore();
let history = syncHistoryWithStore(historyType, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
