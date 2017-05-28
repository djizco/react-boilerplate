import React from 'react';
import { browserHistory } from 'react-router';
import { RaisedButton } from 'material-ui';

export default function HomePage() {
  const handleToCounter = () => browserHistory.push('counter');
  const handleToTodo = () => browserHistory.push('todo');
  const buttonStyles = { margin: '10px' };

  return (
    <div className="home-page">
      <div className="container">
        <div className="section link-section app-flex">
          <h1 className="title is-1">React App</h1>
          <RaisedButton label="Counter App" style={buttonStyles} onClick={handleToCounter} />
          <RaisedButton label="Todo App" style={buttonStyles} onClick={handleToTodo} />
        </div>
      </div>
    </div>
  );
}
