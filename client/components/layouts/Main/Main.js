import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import customTheme from '_styles/theme';

import Navbar from '_structures/Navbar';
import Footer from '_structures/Footer';

const theme = createMuiTheme(customTheme);

export default function Main(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Navbar />
        <div className="main">{props.children}</div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
