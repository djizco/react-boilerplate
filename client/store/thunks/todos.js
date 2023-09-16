import { addTodo, incrementTodoId } from '_store/actions/todos';

export const addTodoAndIncrementId = text => (dispatch, getState) => {
  const { nextTodoId } = getState().todos;

  dispatch(addTodo(nextTodoId, text));
  dispatch(incrementTodoId());
};
