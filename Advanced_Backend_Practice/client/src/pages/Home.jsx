
import React, { useEffect, useState } from 'react'

import Navbar from '@/pages/Navbar'

import axios from 'axios'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
const Home = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {toast}=useToast()
    const [todo, setTodo] = useState([])
    const addTodoHandler=async()=>{
      try {
        if(!title || !description){
          console.log('pls fill all the fildes')
        }else{
        console.log(title,description)
        }

        const res =await axios.post('http://localhost:8000/api/v1/todo/createTodo',{title,description},{
          headers:{"Content-Type":'application/json' },withCredentials:true
        },
      
      )  
      console.log(res )

      if(res.data.success){
        alert(res.data.message)
       
      }
        
      } catch (error) {
        alert(error.response.data.message)
      }


      
    }

    useEffect(()=>{
        const fetchTodo=async()=>{
            try {
                const res=await axios.get('http://localhost:8000/api/v1/todo/getTodo')
                console.log(res)
                if(res.data.success){
                    setTodo(res.data.todos)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchTodo()
    },[])

  return (
    <div>
      <Navbar/>
      <div className='flex items-center gap-5 mt-5'>
      
      <Input value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type="text" placeholder="Add a new Todo" className='w-1/4' />
      
       
      
      <Button onClick={addTodoHandler} >Add todo 🚀</Button>
      </div>
      
      <Textarea 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      placeholder='Write a description' className="w-1/4 mt-2" />
        {
            todo.map((todo)=>{
                return (
                    <div key={todo._id}>
                        {todo.title}
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Home