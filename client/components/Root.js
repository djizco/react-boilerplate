import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { persistStore } from 'redux-persist';
import routes from '../routes';
import DevTools from './DevTools';

export const scrollToTop = () => window.scrollTo(0, 0);
const isProd = process.env.NODE_ENV === 'production';


export default class Root extends Component {
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
      whitelist: ['counter', 'todos'],
      keyPrefix: '',
    };

    persistStore(this.props.store, reduxPersistOptions, this.rehydrate);
  }

  rehydrate = () => this.setState({ rehydrated: true })

  render() {
    const { store, history } = this.props;
    if (this.state.rehydrated) {
      return isProd ?
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
        :
        <Provider store={store}>
          <div>
            <Router history={history} routes={routes} />
            <DevTools />
          </div>
        </Provider>;
    }
    return null;
  }
}
