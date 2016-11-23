import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { increment, decrement } from '../actions/counter';
import Button from '../components/Button';


export class CounterPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.props.dispatch(increment());
  }

  handleDecrement = (e) => {
    e.preventDefault();
    this.props.dispatch(decrement());
  }

  render() {
    return (
      <div className="counter-app app-flex">
        <h1 className="title is-1 has-text-centered">Counter:</h1>
        <div className="counter">{this.props.counter}</div>
        <div className="columns">
          <div className="column is-6 text-center">
            <Button
              success={true}
              handleClick={this.handleIncrement}
              label="Increment" />
          </div>
          <div className="column is-6 text-center">
            <Button
              danger={true}
              handleClick={this.handleDecrement}
              label="Decrement" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = R.pick(['counter']);

export default connect(mapStateToProps)(CounterPage);
