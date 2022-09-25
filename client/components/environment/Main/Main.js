import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '_organisms/Navbar';
import Footer from '_organisms/Footer';

import HomePage from '_pages/HomePage';
import CounterPage from '_pages/CounterPage';
import TodoPage from '_pages/TodoPage';
import LostPage from '_pages/LostPage';

export default function Main() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="has-navbar-fixed-top">
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
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
