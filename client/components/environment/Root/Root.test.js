import React from 'react';
import ReactDOM from 'react-dom';

import { store, history } from '_store';

import Root from './Root';

describe('Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root history={history} store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
