export interface Todo {
  id: string;
  title: string;
  completed: boolean;
};

export type ListOfTodos = Todo[];

// export type TodoId= Todo['id'];
export type TodoId= Pick<Todo,'id'>;
export type TodoTitle = Todo['title'];  
export type TodoCompleted = Todo['completed'];  