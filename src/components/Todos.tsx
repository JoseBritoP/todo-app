import React from 'react';
import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types';
import Todo from './Todo';
interface Props {
  todos: ListOfTodos;
  handleRemove:({id}: TodoId)=>void,
  handleComplete: ({id,completed}:Pick<TodoType,'id'|'completed'>) =>void
}

const Todos: React.FC<Props> = ({ todos, handleRemove,handleComplete }) => {
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
            handleComplete={handleComplete}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
