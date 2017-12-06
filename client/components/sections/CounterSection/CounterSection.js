import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../elements/Button';

export default function CounterSection({ counter, increment, decrement }) {
  return (
    <div className="section counter-section app-flex">
      <h1 className="title is-1 has-text-centered">Counter:</h1>
      <div className="counter">{counter}</div>
      <div className="columns">
        <div className="column is-6 text-center">
          <Button
            type="success"
            handleClick={increment}
            label="Increment" />
        </div>
        <div className="column is-6 text-center">
          <Button
            type="danger"
            handleClick={decrement}
            label="Decrement" />
        </div>
      </div>
    </div>
  );
}

CounterSection.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
