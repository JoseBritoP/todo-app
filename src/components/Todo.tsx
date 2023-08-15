import {type Todo as TodoType, type TodoId} from '../types'

// type Props = TodoType

interface Props extends TodoType{
  handleRemove:({id}: TodoId)=>void
  handleComplete: ({id,completed}:Pick<TodoType,'id'|'completed'>) =>void
}

const Todo: React.FC<Props> = ({id,title,completed,handleRemove,handleComplete}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.target.checked 
    handleComplete({
      id,
      completed:event.target.checked
    });
  }

  return (
    <div className='view'>
      <input 
        className="toggle"
        type='checkbox' 
        checked={completed} 
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className='destroy' onClick={()=>{handleRemove({id})}}></button>
    </div>
  )
}

export default Todo
