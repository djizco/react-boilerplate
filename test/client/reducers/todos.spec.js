import Lab from 'lab';
import { expect } from 'code';

import { addTodo } from '../../../client/actions/todos';
import reducer from '../../../client/reducers/todos';

const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

experiment('Todos Reducer:', () => {
  test('Add Todo', done => {
    const action = addTodo('Example Todo');
    const state = reducer([], action);
    const todo = state[0];

    expect(state).to.be.an.array();
    expect(state).to.have.length(1);

    expect(todo).to.be.an.object();
    expect(todo.id).to.equal(1);
    expect(todo.text).to.equal('Example Todo');
    done();
  });
});
