import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Main(props) {
  return (
    <div className="main-container full-size">
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <div className="main-header">
          <Link to="/" activeStyle={{ textDecoration: 'none', color: '#DDD' }}>
            <h2 className="margin-sm">New App</h2>
          </Link>
        </div>
        {React.cloneElement(props.children, { key: props.location.pathname })}
      </ReactCSSTransitionGroup>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Main;
