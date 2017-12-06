import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Main(props) {
  return (
    <MuiThemeProvider>
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
