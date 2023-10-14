import React from 'react';

import { createRoot } from 'react-dom/client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { history, store } from '_store';

import Root from '_components/environment/Root';

createRoot(document.getElementById('app'))
  .render(<Root history={history} store={store} />);
