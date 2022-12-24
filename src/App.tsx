import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { AddTodoForm } from './addTodoForm';
import { TodoList } from './todoList';
import { TodoListItem } from './todolistItem';

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Make app", complete: false }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo:ToggleTodo = selectedTodo =>{
    const newTodos= todos.map(todo => {

      if(todo == selectedTodo){
        return{
          ...todo,
          complete: !todo.complete

        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm />
    </React.Fragment>
  );
}

export default App;
