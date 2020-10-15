import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bulma-companion/lib/Button';

import { decrement } from '_store/actions/counter';

export default function DecrementButton() {
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(decrement());

  return (
    <Button color="danger" onClick={handleDecrement}>
      Decrement
    </Button>
  );
}
