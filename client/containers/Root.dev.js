import React, { Component, PropTypes } from 'react';

import { Provider } from 'react-redux';
import { Router }   from 'react-router';
import DevTools     from './DevTools.js';
import routes       from '../routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div className='full-size'>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
