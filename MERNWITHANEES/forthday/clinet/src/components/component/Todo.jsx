import React, { useState } from 'react'
import AddTodo from './AddTodo'

const Todo = () => {


    //add todo function
    //delete todo function
    //update todo funciton
    //hook array todos kay name say sahi or us ki value ko set karnay ka name setTodos hoga

    const addTodo=(id,title)=>{
        const todo= {id,title}

        setTodos((value)=>[...value,todo]) 

    }
    const deleteTodo=(id)=>{
        //id:4

        const newTodo=todos.filter((todo)=>(todo.id!==id))
        setTodos(newTodo)

        
    }
    const updateTodo=(id,title)=>{
        const newTodo=todos.map((todo)=> todo.id!==id ?  todo : {id,title}  )
    }

    const [todos,setTodos]=useState([])
    



  return (
   <>
    <AddTodo addTodo={addTodo} />
    {
       todos && todos.map((todo)=>{
            return <h1 key={todo.id} >{todo.title}</h1>

        })
    }

    </>
  )
}

export default Todo