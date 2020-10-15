import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';

import useKeyPress from '_hooks/useKeyPress';
import { addTodoAndIncrementId } from '_store/thunks/todos';

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
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button onClick={handleAddTodo} color="success" fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
