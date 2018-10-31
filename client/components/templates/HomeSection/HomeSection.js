import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

export default function HomeSection(props) {
  const { pushToCounter, pushToTodo } = props;

  const buttonStyles = { margin: '10px' };

  return (
    <div className="section link-section app-flex">
      <h1 className="title is-1">
        React App
      </h1>
      <Button variant="contained" color="primary" style={buttonStyles} onClick={pushToCounter}>
        Counter App
        <ArrowForward />
      </Button>
      <Button variant="contained" color="primary" style={buttonStyles} onClick={pushToTodo}>
        Todo App
        <ArrowForward />
      </Button>
    </div>
  );
}

HomeSection.propTypes = {
  pushToCounter: PropTypes.func.isRequired,
  pushToTodo: PropTypes.func.isRequired,
};
