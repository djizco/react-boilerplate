import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import IncrementButton from '_atoms/IncrementButton';
import DecrementButton from '_atoms/DecrementButton';

export default function CounterSection() {
  const { counter } = useSelector(R.pick(['counter']));

  return (
    <Section className="counter-section app-flex">
      <Title className="has-text-centered" size="1">
        Counter:
      </Title>
      <div className="counter">
        {counter}
      </div>
      <Columns>
        <Column size="6">
          <IncrementButton />
        </Column>
        <Column size="6">
          <DecrementButton />
        </Column>
      </Columns>
    </Section>
  );
}
