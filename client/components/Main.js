import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Main(props) {
  return (
    <MuiThemeProvider>
      <div>
        <Navigation />
        <TransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="main">
            {React.cloneElement(props.children, { key: props.location.pathname })}
          </div>
        </TransitionGroup>
        <Footer />
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
