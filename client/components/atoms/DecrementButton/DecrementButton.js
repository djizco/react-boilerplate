import React from 'react';
import { useDispatch } from 'react-redux';

import { decrement } from '_store/actions/counter';
import Button from '_atoms/Button';

export default function DecrementButton() {
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(decrement());

  return (
    <Button
      type="danger"
      handleClick={handleDecrement}
      label="Decrement"
    />
  );
}
