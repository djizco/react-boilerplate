import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Title from 'react-bulma-companion/lib/Title';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoPage() {
  return (
    <div className="todo-page">
      <Section className="todo-section">
        <Title textAlign="center" size="1">
          Todo List:
        </Title>
        <Columns>
          <Column size="8" offset="2">
            <AddTodo />
          </Column>
        </Columns>
        <Columns>
          <Column size="8" offset="2">
            <TodoList />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
