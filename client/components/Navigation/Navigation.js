import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

export default function Navigation(props) {
  const { active, toggleActive, deactivate } = props;

  const toggleClasses = classNames({ 'nav-toggle': true, 'is-active': active });
  const menuClasses = classNames({ 'nav-menu': true, 'nav-right': true, 'is-active': active });

  return (
    <nav className="nav has-shadow is-fixed">
      <div className="container">

        <div className="nav-left">
          <Link to="/" className="nav-item" onClick={deactivate}>
            <h3 className="title is-3">React</h3>
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/" className="nav-item">
            <span className="icon is-medium">
              <i className="fa fa-2x fa-home" />
            </span>
          </Link>
        </div>

        <span className={toggleClasses} onClick={toggleActive}>
          <span />
          <span />
          <span />
        </span>

        <div className={menuClasses}>
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

      </div>
    </nav>
  );
}

Navigation.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired,
};
