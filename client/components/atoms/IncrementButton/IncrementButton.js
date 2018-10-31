import React from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/Button';

export default function IncrementButton({ increment }) {
  return (
    <Button
      type="success"
      handleClick={increment}
      label="Increment"
    />
  );
}

IncrementButton.propTypes = {
  increment: PropTypes.func.isRequired,
};
