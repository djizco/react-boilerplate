import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function HomePage({ classes, pushToCounter, pushToTodo }) {
  return (
    <div className="home-page">
      <Section className="link-section app-flex">
        <Title size="1">
          React App!
        </Title>
        <Button className={classes.button} variant="contained" color="primary" onClick={pushToCounter}>
          Counter App
          <ArrowForward />
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={pushToTodo}>
          Todo App
          <ArrowForward />
        </Button>
      </Section>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  pushToCounter: PropTypes.func.isRequired,
  pushToTodo: PropTypes.func.isRequired,
};
