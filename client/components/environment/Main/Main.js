import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import customTheme from '_styles/theme';

import Navbar from '_organisms/Navbar';
import Footer from '_organisms/Footer';

const theme = createMuiTheme(customTheme);

export default function Main(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="has-navbar-fixed-top">
        <Navbar />
        <div className="main">
          {props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
