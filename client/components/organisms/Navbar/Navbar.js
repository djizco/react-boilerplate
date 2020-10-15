import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bulma-companion/lib/Navbar';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Icon from 'react-bulma-companion/lib/Icon';
import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Button from 'react-bulma-companion/lib/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export default function NavbarComponent() {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);
  const deactivate = () => setActive(false);

  useEffect(() => {
    window.addEventListener('resize', deactivate);
    return () => window.removeEventListener('resize', deactivate);
  }, []);

  return (
    <Navbar fixed="top" shadow aria-label="main navigation">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-item" onClick={deactivate}>
            <Title size="3">
              React
            </Title>
          </Link>
          <Link to="/" className="navbar-item is-hidden-desktop" onClick={deactivate}>
            <Icon size="medium">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Icon>
          </Link>
          <Navbar.Burger active={active} onClick={toggleActive} onKeyPress={toggleActive} />
        </Navbar.Brand>
        <Navbar.Menu active={active}>
          <Navbar.Start>
            <Link to="/counter" className="navbar-item" onClick={deactivate}>
              Counter
            </Link>
            <Link to="/todo" className="navbar-item" onClick={deactivate}>
              Todo
            </Link>
          </Navbar.Start>
          <hr className="is-hidden-desktop" />
          <Navbar.End>
            <Navbar.Item>
              <Field grouped>
                <Control>
                  <Button color="info" link>
                    <Icon>
                      <FontAwesomeIcon icon={faTwitter} />
                    </Icon>
                    <span>
                      Tweet
                    </span>
                  </Button>
                </Control>
                <Control>
                  <Button color="primary" link>
                    <Icon>
                      <FontAwesomeIcon icon={faDownload} />
                    </Icon>
                    <span>
                      Download
                    </span>
                  </Button>
                </Control>
              </Field>
            </Navbar.Item>
          </Navbar.End>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}
