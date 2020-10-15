import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bulma-companion/lib/Button';

import { increment } from '_store/actions/counter';

export default function IncrementButton() {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  return (
    <Button color="success" onClick={handleIncrement}>
      Increment
    </Button>
  );
}
