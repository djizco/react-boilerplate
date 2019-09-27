import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);
  const deactivate = () => setActive(false);

  useEffect(() => {
    window.addEventListener('resize', deactivate);
    return () => window.removeEventListener('resize', deactivate);
  }, []);

  const toggleClasses = classNames({ 'navbar-burger': true, 'is-active': active });
  const menuClasses = classNames({ 'navbar-menu': true, 'is-active': active });

  return (
    <nav className="navbar has-shadow is-fixed-top" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" onClick={deactivate}>
            <h3 className="title is-3">
              React
            </h3>
          </Link>
          <Link to="/" className="navbar-item is-hidden-desktop" onClick={deactivate}>
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faHome} size="lg" />
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
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary">
                    <span className="icon">
                      <FontAwesomeIcon icon={faDownload} />
                    </span>
                    <span>
                      Download
                    </span>
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
