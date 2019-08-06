import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { persistStore } from 'redux-persist';

import Main from '_environment/Main';

export default function Root({ store, history }) {
  const [rehydrated, setRehydrated] = useState(false);

  const rehydrate = () => setRehydrated(true);

  const reduxPersistOptions = {
    whitelist: ['counter', 'todos', 'nextTodoId'],
    keyPrefix: '',
  };

  useEffect(() => {
    persistStore(store, reduxPersistOptions, rehydrate);
  }, []);

  return rehydrated && (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Main />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
