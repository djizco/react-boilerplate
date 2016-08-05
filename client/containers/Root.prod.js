import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

function Root(props) {
  return (
    <Provider store={props.store}>
      <Router history={props.history} routes={routes} />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
