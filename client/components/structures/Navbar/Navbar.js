import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

export default function Navbar(props) {
  const { active, toggleActive, deactivate } = props;

  const toggleClasses = classNames({ 'navbar-burger': true, 'is-active': active });
  const menuClasses = classNames({ 'navbar-menu': true, 'is-active': active });

  return (
    <nav className="navbar has-shadow is-fixed" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" onClick={deactivate}>
            <h3 className="title is-3">React</h3>
          </Link>

          <Link to="/" className="navbar-item is-hidden-desktop" onClick={deactivate}>
            <span className="icon is-medium">
              <i className="fa fa-lg fa-home" />
            </span>
          </Link>

          <div className={toggleClasses} onClick={toggleActive} onKeyPress={toggleActive}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={menuClasses}>
          <div className="navbar-start">
            <Link to="counter" className="navbar-item" onClick={deactivate}>
              Counter
            </Link>
            <Link to="todo" className="navbar-item" onClick={deactivate}>
              Todo
            </Link>
          </div>

          <hr className="is-hidden-desktop" />

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info">
                    <span className="icon">
                      <i className="fa fa-twitter" />
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary">
                    <span className="icon">
                      <i className="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired,
};
