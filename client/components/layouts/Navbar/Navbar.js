import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bulma-companion/lib/Button';
import Container from 'react-bulma-companion/lib/Container';
import Control from 'react-bulma-companion/lib/Control';
import Field from 'react-bulma-companion/lib/Field';
import Icon from 'react-bulma-companion/lib/Icon';
import Navbar from 'react-bulma-companion/lib/Navbar';
import Title from 'react-bulma-companion/lib/Title';

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
          <Navbar.Item onClick={deactivate} to="/" component={Link}>
            <Title size="3">
              React
            </Title>
          </Navbar.Item>
          <Navbar.Item to="/" className="is-hidden-desktop" onClick={deactivate} component={Link}>
            <Icon size="medium">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Icon>
          </Navbar.Item>
          <Navbar.Burger active={active} onClick={toggleActive} onKeyPress={toggleActive} />
        </Navbar.Brand>
        <Navbar.Menu active={active}>
          <Navbar.Start>
            <Navbar.Item to="/counter" onClick={deactivate} component={Link}>
              Counter
            </Navbar.Item>
            <Navbar.Item to="/todo" onClick={deactivate} component={Link}>
              Todo
            </Navbar.Item>
          </Navbar.Start>
          <hr className="is-hidden-desktop" />
          <Navbar.End>
            <Navbar.Item>
              <Field grouped>
                <Control>
                  <Button color="info" component="a">
                    <Icon>
                      <FontAwesomeIcon icon={faTwitter} />
                    </Icon>
                    <span>
                      Tweet
                    </span>
                  </Button>
                </Control>
                <Control>
                  <Button color="primary" component="a">
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
