import {type Todo as TodoType} from '../types'

// type Props = TodoType

interface Props extends TodoType{
  handleRemove:(id:string)=>void
}

const Todo: React.FC<Props> = ({id,title,completed,handleRemove}) => {

  return (
    <div className='view'>
      <input 
      className="toggle"
      type='checkbox' 
      checked={completed} 
      onChange={()=>{}}
      />
      <label>{title}</label>
      <button className='destroy' onClick={()=>{handleRemove(id)}}></button>
    </div>
  )
}

export default Todo