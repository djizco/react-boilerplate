import React, { PropTypes } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from './Navigation';

export default function Main(props) {
  return (
    <div className="main-container">
      <Navigation />
      {/* <ReactCSSTransitionGroup
        component="div"
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {React.cloneElement(props.children, { key: props.location.pathname })}
      </ReactCSSTransitionGroup> */}
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
