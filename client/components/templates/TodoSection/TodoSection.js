import React from 'react';

import AddTodo from '_molecules/AddTodo';
import TodoList from '_organisms/TodoList';

import Section from 'react-bulma-companion/lib/Section';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Title from 'react-bulma-companion/lib/Title';

export default function TodoSection() {
  return (
    <Section className="todo-section">
      <Title className="has-text-centered" size="1">
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
  );
}
