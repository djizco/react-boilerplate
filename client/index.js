import React from 'react';

import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'font-awesome-webpack';
import './styles/index.scss';
import './assets';

import Root from './components/layouts/Root';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app'),
);
