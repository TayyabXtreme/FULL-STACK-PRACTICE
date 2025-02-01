import React from 'react'
import { Button } from '../ui/button'
import { Delete, Edit } from 'lucide-react'
import TodoSpan from './SpanTodo'

const ViewTodo = ({todo,deleteTodo,updateTodo}) => {
  return (
    <div className=' h-64 overflow-y-scroll p-2'>
       {
        todo.map((todos)=>{
            return (
                <div key={todos._id}>
                    <TodoSpan updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos}/>

                </div>
        
            )
            
            
        })
       }

        


    </div>
  )
}

export default ViewTodo



