import React from 'react';

import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'font-awesome-webpack';
import './styles/index.scss';
import './assets';

import Root from './components/Root';
import configureStore from './store/configureStore';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
