import React from 'react';
import { useDispatch } from 'react-redux';

import { increment } from '_store/actions/counter';
import Button from '_atoms/Button';

export default function IncrementButton() {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  return (
    <Button
      type="success"
      handleClick={handleIncrement}
      label="Increment"
    />
  );
}
