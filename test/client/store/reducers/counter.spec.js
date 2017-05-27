import Lab from 'lab';
import { expect } from 'code';

import { increment, decrement } from '../../../../client/store/actions/counter';
import reducer from '../../../../client/store/reducers/counter';

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

experiment('Counter Reducer:', () => {
  let state = reducer(undefined, {});

  test('Is 0 by default', done => {
    expect(state).to.be.a.number();
    expect(state).to.equal(0);
    done();
  });

  test('Increment', done => {
    const action = increment();
    state = reducer(state, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(1);
    done();
  });

  test('Decrement', done => {
    const action = decrement();
    state = reducer(state, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(0);

    state = reducer(state, action);
    expect(state).to.equal(-1);

    done();
  });
});
