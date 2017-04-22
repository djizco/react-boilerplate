import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Main(props) {
  return (
    <MuiThemeProvider>
      <div>
        <Navigation />
        <div className="main">{props.children}</div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
