import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import customTheme from '_styles/theme';

import Navbar from '_organisms/Navbar';
import Footer from '_organisms/Footer';

import HomePage from '_pages/HomePage';
import CounterPage from '_pages/CounterPage';
import TodoPage from '_pages/TodoPage';
import LostPage from '_pages/LostPage';

const theme = createMuiTheme(customTheme);

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className="has-navbar-fixed-top">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/todo" component={TodoPage} />
            <Route path="*" component={LostPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
