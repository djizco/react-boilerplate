import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Root from '_environment/Root';
import configureStore from '_store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
