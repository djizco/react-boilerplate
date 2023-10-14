import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from '_components/layouts/Footer';
import Navbar from '_components/layouts/Navbar';
import CounterPage from '_components/pages/CounterPage';
import HomePage from '_components/pages/HomePage';
import LostPage from '_components/pages/LostPage';
import TodoPage from '_components/pages/TodoPage';

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
