import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    


    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const {toast}=useToast()

    const loginHandler=async()=>{
       

        try {
            if(!user.email || !user.password){
                console.log('pls enter all the filed')
            }else{
            console.log(user)
            const res=await axios.post('http://localhost:8000/api/v1/user/login',user,{
                headers:{"Content-Type":'application/json'},
                withCredentials:true
            })
            console.log(res)
            if(res.data.success){
                alert(res.data.message)
            }


            }


            
            
        } catch (error) {
            alert(error.response.data.message)
            
        }
    }
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
        <Input
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        type="email" placeholder="email" />
        <Input 
        value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})}
        type="password" placeholder="password" />
        <Button onClick={loginHandler}>Login</Button>
    </div>
  )
}

export default Login