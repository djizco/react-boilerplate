import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

export default function HomeSection(props) {
  const { classes, pushToCounter, pushToTodo } = props;

  return (
    <div className="section link-section app-flex">
      <h1 className="title is-1">
        React App
      </h1>
      <Button className={classes.button} variant="contained" color="primary" onClick={pushToCounter}>
        Counter App
        <ArrowForward />
      </Button>
      <Button className={classes.button} variant="contained" color="primary" onClick={pushToTodo}>
        Todo App
        <ArrowForward />
      </Button>
    </div>
  );
}

HomeSection.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  pushToCounter: PropTypes.func.isRequired,
  pushToTodo: PropTypes.func.isRequired,
};
