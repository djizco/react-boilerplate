import React from 'react';

import Container from 'react-bulma-companion/lib/Container';
import Content from 'react-bulma-companion/lib/Content';
import Footer from 'react-bulma-companion/lib/Footer';

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Container>
        <Content className="has-text-centered">
          <p>
            {`Copyright Ⓒ ${year} React Boilerplate. All Rights Reserved.`}
          </p>
        </Content>
      </Container>
    </Footer>
  );
}
