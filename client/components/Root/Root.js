import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';
import DevTools from '../DevTools';

const isProd = process.env.NODE_ENV === 'production';

export default function Root(props) {
  const { store, history, scrollToTop } = props;
  return isProd ?
    <Provider store={store}>
      <Router onUpdate={scrollToTop} history={history} routes={routes} />
    </Provider>
    :
    <Provider store={store}>
      <div>
        <Router onUpdate={scrollToTop} history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>;
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};
