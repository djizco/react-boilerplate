import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import Navbar from '_organisms/Navbar';
import Footer from '_organisms/Footer';

import HomePage from '_pages/HomePage';
import CounterPage from '_pages/CounterPage';
import TodoPage from '_pages/TodoPage';
import LostPage from '_pages/LostPage';

export default function Main({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
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
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
