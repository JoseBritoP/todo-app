import {useState} from 'react'
import Todos from './components/Todos';
const mockTodos = [
  {
    id:'1',
    title: 'Todo 1' ,
    completed: true
  },
  {
    id:'2',
    title: 'Todo 2' ,
    completed: false
  },
  {
    id:'3',
    title: 'Todo 3' ,
    completed: false
  }
]

const App = ():JSX.Element => {
  const [todos,setTodos] = useState(mockTodos);

  
  const handleRemove = (id:string) :void =>{
    const newTodos = todos.filter((todo)=> todo.id !==id)
     setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <h1>To do</h1>
      <Todos todos={todos} handleRemove={handleRemove}/>
    </div>
  )
}

export default App;