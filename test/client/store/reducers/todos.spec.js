import Lab from 'lab';
import { expect } from 'code';

import { addTodo, toggleCompleteTodo, updateTodo, hideTodo, deleteTodo } from '../../../../client/store/actions/todos';
import reducer from '../../../../client/store/reducers/todos';

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

experiment('Todos Reducer:', () => {
  let state = reducer(undefined, {});

  test('Is an empty array by default', done => {
    expect(state).to.be.an.array();
    expect(state).to.have.length(0);
    done();
  });

  test('Add Todo', done => {
    state = reducer(state, addTodo(1, 'Study for exams.'));

    expect(state).to.be.an.array();
    expect(state).to.have.length(1);

    state = reducer(state, addTodo(2, 'Take out the trash.'));
    expect(state).to.have.length(2);

    state = reducer(state, addTodo(3, 'Clean up room.'));
    expect(state).to.have.length(3);

    const todo = state[1];

    expect(todo).to.be.an.object();
    expect(todo.id).to.equal(2);
    expect(todo.completed).to.equal(false);
    expect(todo.hidden).to.equal(false);
    expect(todo.createdAt).to.be.a.number();
    expect(todo.updatedAt).to.be.undefined();
    expect(todo.text).to.equal('Take out the trash.');

    done();
  });

  test('Toggle Complete Todo', done => {
    state = reducer(state, toggleCompleteTodo(2));
    let todo = state[1];

    expect(state).to.be.an.array();
    expect(state).to.have.length(3);

    expect(todo.id).to.equal(2);
    expect(todo.completed).to.equal(true);

    state = reducer(state, toggleCompleteTodo(2));
    // eslint-disable-next-line
    todo = state[1];

    expect(todo.id).to.equal(2);
    expect(todo.completed).to.equal(false);

    done();
  });

  test('Update Todo', done => {
    const action = updateTodo(2, 'Take out the trash and recycle.');
    state = reducer(state, action);
    const todo = state[1];

    expect(state).to.be.an.array();
    expect(state).to.have.length(3);

    expect(todo.id).to.equal(2);
    expect(todo.updatedAt).to.be.a.number();
    expect(todo.text).to.equal('Take out the trash and recycle.');

    done();
  });

  test('Hide Todo', done => {
    const action = hideTodo(2);
    state = reducer(state, action);
    const todo = state[1];

    expect(state).to.be.an.array();
    expect(state).to.have.length(3);
    expect(state[0].id).to.equal(1);
    expect(state[1].id).to.equal(2);

    expect(todo.id).to.equal(2);
    expect(todo.hidden).to.equal(true);

    done();
  });

  test('Delete Todo', done => {
    const action = deleteTodo(2);
    state = reducer(state, action);

    expect(state).to.be.an.array();
    expect(state).to.have.length(2);
    expect(state[0].id).to.equal(1);
    expect(state[1].id).to.equal(3);

    done();
  });
});
