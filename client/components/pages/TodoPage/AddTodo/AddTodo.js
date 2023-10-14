import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Button from 'react-bulma-companion/lib/Button';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Input from 'react-bulma-companion/lib/Input';

import { addTodoAndIncrementId } from '_store/thunks/todos';

import useKeyPress from '_hooks/useKeyPress';

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

  useKeyPress('Enter', handleAddTodo);

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
