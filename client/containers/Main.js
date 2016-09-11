import React, { PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import Navigation from './Navigation';

export default function Main(props) {
  return (
    <div className="main-container">
      <Navigation />
      <TransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {React.cloneElement(props.children, { key: props.location.pathname })}
      </TransitionGroup>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
