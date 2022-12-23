import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { TodoListItem } from './todolistItem';

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Make app", complete: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
}

export default App;
