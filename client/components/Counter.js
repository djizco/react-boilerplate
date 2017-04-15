import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default function Counter({ counter, increment, decrement }) {
  return (
    <div className="section counter-section app-flex">
      <h1 className="title is-1 has-text-centered">Counter:</h1>
      <div className="counter">{counter}</div>
      <div className="columns">
        <div className="column is-6 text-center">
          <Button
            success={true}
            handleClick={increment}
            label="Increment" />
        </div>
        <div className="column is-6 text-center">
          <Button
            danger={true}
            handleClick={decrement}
            label="Decrement" />
        </div>
      </div>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
