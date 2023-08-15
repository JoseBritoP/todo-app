import React from 'react';
import { type ListOfTodos } from '../types';
import Todo from './Todo';
interface Props {
  todos: ListOfTodos;
  handleRemove:(id:string)=>void,
}

const Todos: React.FC<Props> = ({ todos, handleRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li 
          key={todo.id} 
          className={`${todo.completed ? 'completed' : '' }`}
        >
          {/* {todo.title} */}
          <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleRemove={handleRemove}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
