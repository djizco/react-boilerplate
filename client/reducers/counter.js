import R from 'ramda';
import { INCREMENT, DECREMENT } from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return R.add(state, 1);
    case DECREMENT:
      return R.subtract(state, 1);
    default:
      return state;
  }
}
