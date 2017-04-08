import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

function toggleActive() {
  $('#nav-toggle').toggleClass('is-active');
  $('#nav-menu').toggleClass('is-active');
}

export default function Navigation() {
  return (
    <nav className="nav has-shadow is-fixed">
      <div className="nav-left">
        <Link to="/" className="nav-item">
          <h3 className="title is-3">React</h3>
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-item">
          <span className="icon is-medium">
            <i className="fa fa-home" />
          </span>
        </Link>
      </div>

      <span id="nav-toggle" className="nav-toggle" onClick={toggleActive}>
        <span />
        <span />
        <span />
      </span>

      <div id="nav-menu" className="nav-right nav-menu">
        <Link to="/" className="nav-item" onClick={toggleActive}>
          <h6 className="title is-6">Home</h6>
        </Link>
        <Link to="counter" className="nav-item" onClick={toggleActive}>
          <h6 className="title is-6">Counter</h6>
        </Link>
        <Link to="todo" className="nav-item" onClick={toggleActive}>
          <h6 className="title is-6">Todo</h6>
        </Link>
      </div>

    </nav>
  );
}
