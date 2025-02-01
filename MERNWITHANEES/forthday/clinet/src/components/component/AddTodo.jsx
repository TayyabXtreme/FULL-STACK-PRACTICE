import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

    const addHanler=()=>{
      const id=Date.now()
      if(!id ||  !title){
        alert('pls fill all the fileds')
      }else{
      addTodo(id,title)
      }

    }

    const [title,setTitle]=useState('')

    const changeHanlder=(e)=>{
      setTitle(e.target.value)
    }


  return (
    <>
    <input
    value={title}
    className='text-black'
    onChange={(e)=>changeHanlder(e)}
    type="text" />
    <button 
    onClick={addHanler}
    >ADD</button>
    </>
  )
}

export default AddTodo