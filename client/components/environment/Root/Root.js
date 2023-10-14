import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { persistStore } from 'redux-persist';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import theme from '_client/styles/js/theme';

import Main from '_components/environment/Main';

export default function Root({ history, store }) {
  const [rehydrated, setRehydrated] = useState(false);

  const rehydrate = () => setRehydrated(true);

  useEffect(() => {
    const reduxPersistOptions = {
      whitelist: ['counter', 'todos', 'nextTodoId'],
      keyPrefix: '',
    };

    persistStore(store, reduxPersistOptions, rehydrate);
  }, [store]);

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
