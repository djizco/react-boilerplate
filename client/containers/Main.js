import React, { Component }    from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container full-size'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div className='main-header'>
            <Link to='/' activeStyle={{textDecoration: 'none', color: '#DDD'}}>
              <h2 className='margin-sm'>New App</h2>
            </Link>
          </div>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
