import React from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/Button';

export default function DecrementButton({ decrement }) {
  return (
    <Button
      type="danger"
      handleClick={decrement}
      label="Decrement"
    />
  );
}

DecrementButton.propTypes = {
  decrement: PropTypes.func.isRequired,
};
