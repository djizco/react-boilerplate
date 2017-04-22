import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function AddTodo({ text, updateText, handleClick }) {
  return (
    <div className="add-todo columns is-gapless">
      <div className="column is-10">
        <input className="input" type="text" value={text} onChange={updateText} />
      </div>
      <div className="column is-2">
        <Button style={{ width: '100%' }} handleClick={handleClick} label="Add" type="success" />
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  text: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
