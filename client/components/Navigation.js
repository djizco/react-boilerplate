import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav className="nav has-shadow">
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

      <span className="nav-toggle">
        <span />
        <span />
        <span />
      </span>

      <div className="nav-right nav-menu">
        <Link to="/" className="nav-item">
          <h6 className="title is-6">Home</h6>
        </Link>
      </div>
    </nav>
  );
}
