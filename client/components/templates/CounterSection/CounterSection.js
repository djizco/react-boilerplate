import React from 'react';
import { useSelector } from 'react-redux';
import R from '_utils/ramda';

import IncrementButton from '_atoms/IncrementButton';
import DecrementButton from '_atoms/DecrementButton';

export default function CounterSection() {
  const { counter } = useSelector(R.pick(['counter']));

  return (
    <div className="section counter-section app-flex">
      <h1 className="title is-1 has-text-centered">
        Counter:
      </h1>
      <div className="counter">
        {counter}
      </div>
      <div className="columns">
        <div className="column is-6 text-center">
          <IncrementButton />
        </div>
        <div className="column is-6 text-center">
          <DecrementButton />
        </div>
      </div>
    </div>
  );
}
