import React, { PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation';

export default function Main(props) {
  return (
    <MuiThemeProvider>
      <div>
        <Navigation />
        <TransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {React.cloneElement(props.children, { key: props.location.pathname })}
        </TransitionGroup>
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
