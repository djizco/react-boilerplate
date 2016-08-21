import React from 'react';

import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root.js';
import configureStore from './store/configureStore';

import './styles/main.css';
import './styles/main.scss';
import './assets/icons/favicon.ico';
import './assets/images/bg-texture.jpg';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
