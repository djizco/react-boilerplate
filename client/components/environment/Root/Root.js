import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { persistStore } from 'redux-persist';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import Main from '_environment/Main';

import theme from '_styles/js/theme';

export default function Root({ history, store }) {
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
      <Router history={history}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
