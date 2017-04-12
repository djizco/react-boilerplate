import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import R from 'ramda';

import { increment, decrement } from '../actions/counter';
import Button from '../components/Button';


export class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleIncrement = e => {
    e.preventDefault();
    this.props.increment();
  }

  handleDecrement = e => {
    e.preventDefault();
    this.props.decrement();
  }

  render() {
    return (
      <div className="counter-page">
        <div className="container">
          <div className="section full-page app-flex">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = R.pick(['counter']);

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
