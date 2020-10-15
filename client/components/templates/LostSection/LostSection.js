import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function LostSection() {
  return (
    <Section className="is-full-page">
      <Title className="app-title" size="1">
        404
      </Title>
      <p>
        The page you requested does not exist.
      </p>
    </Section>
  );
}
