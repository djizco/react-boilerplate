import R from 'ramda';
import { INCREMENT, DECREMENT } from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return R.inc(state);
    case DECREMENT:
      return R.dec(state);
    default:
      return state;
  }
}
