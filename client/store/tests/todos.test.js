import { addTodo, toggleCompleteTodo, updateTodo, deleteTodo } from '_store/actions/todos';
import reducer from '_store/reducers/todos';

describe('Todos Reducer:', () => {
  let state = reducer(undefined, {});

  test('Is an empty array by default', () => {
    expect(state.list).toEqual(expect.any(Array));
    expect(state.list).toHaveLength(0);
  });

  test('Add Todo', () => {
    state = reducer(state, addTodo(1, 'Study for exams.'));

    expect(state.list).toHaveLength(1);

    state = reducer(state, addTodo(2, 'Take out the trash.'));

    expect(state.list).toHaveLength(2);

    state = reducer(state, addTodo(3, 'Clean up room.'));

    expect(state.list).toHaveLength(3);

    const todo = state.list[1];

    expect(todo).toEqual(expect.any(Object));
    expect(todo.id).toEqual(2);
    expect(todo.completed).toEqual(false);
    expect(todo.createdAt).toEqual(expect.any(Number));
    expect(todo.updatedAt).toBeUndefined();
    expect(todo.text).toEqual('Take out the trash.');
  });

  test('Toggle Complete Todo', () => {
    state = reducer(state, toggleCompleteTodo(2));
    let todo = state.list[1];

    expect(state.list).toEqual(expect.any(Array));
    expect(state.list).toHaveLength(3);
    expect(todo.id).toEqual(2);
    expect(todo.completed).toEqual(true);

    state = reducer(state, toggleCompleteTodo(2));

    // eslint-disable-next-line
    todo = state.list[1];

    expect(todo.id).toEqual(2);
    expect(todo.completed).toEqual(false);
  });

  test('Update Todo', () => {
    const action = updateTodo(2, 'Take out the trash and recycle.');
    state = reducer(state, action);
    const todo = state.list[1];

    expect(state.list).toHaveLength(3);
    expect(todo.id).toEqual(2);
    expect(todo.updatedAt).toEqual(expect.any(Number));
    expect(todo.text).toEqual('Take out the trash and recycle.');
  });

  test('Delete Todo', () => {
    const action = deleteTodo(2);
    state = reducer(state, action);

    expect(state.list).toHaveLength(2);
    expect(state.list[0].id).toEqual(1);
    expect(state.list[1].id).toEqual(3);
  });
});
