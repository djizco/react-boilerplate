import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useKeyPress from '_hooks/useKeyPress';
import { addTodoAndIncrementId } from '_store/thunks/todos';
import Button from '_atoms/Button';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const updateText = e => setText(e.target.value);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodoAndIncrementId(text));
      setText('');
    }
  };

  useKeyPress(handleAddTodo, 'Enter');

  return (
    <div className="add-todo columns is-gapless">
      <div className="column is-10">
        <input className="input" type="text" value={text} onChange={updateText} />
      </div>
      <div className="column is-2">
        <Button
          style={{ width: '100%' }}
          handleClick={handleAddTodo}
          label="Add"
          type="success"
        />
      </div>
    </div>
  );
}
