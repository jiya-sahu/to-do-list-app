import React from 'react'
import Todocard from './TodoCard'

const Todolist = (props) => {
    const {todos} = props
  return (
   
    <ul className='main'>
      {todos.map((todo,todoind)=>{
        return(
           <Todocard  {...props} key={todoind} index={todoind}>
           <p> {todo}</p>
           </Todocard>
        )
        
      })}
    </ul>
  )
}

export default Todolist;
