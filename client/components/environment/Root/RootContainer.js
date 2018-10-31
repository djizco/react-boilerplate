import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persistStore } from 'redux-persist';
import { hot } from 'react-hot-loader';

import Root from './Root';

class RootContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    rehydrated: false,
  }

  componentWillMount() {
    const reduxPersistOptions = {
      whitelist: ['counter', 'todos', 'nextTodoId'],
      keyPrefix: '',
    };

    persistStore(this.props.store, reduxPersistOptions, this.rehydrate);
  }

  rehydrate = () => this.setState({ rehydrated: true })

  render() {
    const { store, history } = this.props;
    return this.state.rehydrated && (
      <Root store={store} history={history} />
    );
  }
}

export default hot(module)(RootContainer);
