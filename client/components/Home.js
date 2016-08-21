import React, { PropTypes } from 'react';

function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-lg btn-border margin-sm"
      onClick={props.onContinue} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onContinue: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function Home(props) {
  return (
    <div className="home-container full-size">
      <h1 className="home-header">My New App</h1>
      <Button onContinue={props.onContinue}>Continue to App</Button>
    </div>
  );
}

Home.propTypes = {
  onContinue: PropTypes.func.isRequired,
};
