import React from 'react';
import ReactDOM from 'react-dom';

import history from '_client/history';
import { store, persistor } from '_client/store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root history={history} store={store} persistor={persistor} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
