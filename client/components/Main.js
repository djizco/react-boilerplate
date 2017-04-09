import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation';

export default function Main(props) {
  const { children, location } = props;
  return (
    <MuiThemeProvider>
      <div>
        <Navigation />
        <CSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {cloneElement(children, { key: location.pathname })}
        </CSSTransitionGroup>
      </div>
    </MuiThemeProvider>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
