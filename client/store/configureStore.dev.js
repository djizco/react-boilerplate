import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import DevTools from '../containers/DevTools.js';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    DevTools.instrument()
  );
}
