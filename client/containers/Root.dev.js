import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools';
import routes from '../routes';

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <div>
        <Router history={props.history} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
