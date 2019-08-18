import { increment, decrement } from '../actions/counter';
import reducer from '../reducers/counter';

describe('Counter Reducer:', () => {
  let state = reducer(undefined, {});

  test('Is 0 by default', () => {
    expect(state).toEqual(0);
  });

  test('Increment', () => {
    const action = increment();

    state = reducer(state, action);

    expect(state).toEqual(1);
  });

  test('Decrement', () => {
    const action = decrement();

    state = reducer(state, action);

    expect(state).toEqual(0);

    state = reducer(state, action);

    expect(state).toEqual(-1);
  });
});
