import React from 'react';
import { browserHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

export default function HomeSection() {
  const handleToCounter = () => browserHistory.push('counter');
  const handleToTodo = () => browserHistory.push('todo');
  const buttonStyles = { margin: '10px' };

  return (
    <div className="section link-section app-flex">
      <h1 className="title is-1">
        React App
      </h1>
      <Button variant="raised" color="primary" style={buttonStyles} onClick={handleToCounter}>
        Counter App
        <ArrowForward />
      </Button>
      <Button variant="raised" color="primary" style={buttonStyles} onClick={handleToTodo}>
        Todo App
        <ArrowForward />
      </Button>
    </div>
  );
}
