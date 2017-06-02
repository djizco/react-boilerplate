import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { persistStore } from 'redux-persist';
import Root from './Root';

export default class RootContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

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

  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    const { store, history } = this.props;
    return this.state.rehydrated && (
      <Root store={store} history={history} scrollToTop={this.scrollToTop} />
    );
  }
}
