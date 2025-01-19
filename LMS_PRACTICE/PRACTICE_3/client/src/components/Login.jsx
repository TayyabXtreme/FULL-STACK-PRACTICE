import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from '@/features/api/authApi'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'


const Login = () => {
  

  const [loginUser,{data:loginData,error:loginError,isSuccess:loginIsSuccess,isLoading:loginIsLoading}]=useLoginUserMutation()
  const [registerUser,{data:registerData,error:registerError,isSuccess:registerIsSuccess,isLoading:registerIsLoading}]=useRegisterUserMutation()
  useEffect(() => {
    if (loginIsSuccess && loginData) {
      console.log(loginData.message);
      toast.success(loginData.message);
    }
  
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message);
    }
  
    if (registerError) {
      console.log(registerError.data?.message);
      toast.error(registerError.data?.message || 'Failed to register');
    }
  
    if (loginError) {
      console.log("login",loginError.data.message);
      toast.error(loginError.data.message || 'Failed to login');
    }
  }, [registerData, loginData, registerError, loginError, loginIsSuccess, registerIsSuccess])
    const [loginInput, setLoginInput] = useState({
        email:'',
        password:''
    })

    const [signUpInput, setSignUpInput] = useState({
        name:'',
        email:'',
        password:''
    })

    const changeHandler=(e,type)=>{
        const {name,value}=e.target
        if(type=='signup'){
            setSignUpInput({...signUpInput,[name]:value})
        }else{
            setLoginInput({...loginInput,[name]:value})
        }
    }


    
    const handleRegistration=async(type)=>{
      
       const inputData= type =='singup' ? signUpInput : loginInput
       console.log(inputData)
       const action =type ==='singup' ?registerUser : loginUser
      await action(inputData)
    }
    
    
    

  return (
    <div className='flex items-center w-full justify-center my-24'>


<Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">SignUp</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
            
            <div className="space-y-1">
              <Label htmlFor="username">name</Label>
              <Input 
              value={signUpInput.name}
              type='text' name='name' placeholder='Eg. anees' onChange={(e)=>changeHandler(e,'signup')} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" >Email</Label>
              <Input 
              placeholder='example@mail.com' onChange={(e)=>changeHandler(e,'signup')}
              value={signUpInput.email}
              type='email' name='email' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" >Password</Label>
              <Input 
              value={signUpInput.password}
              placeholder='eg.123@asfdA&a' onChange={(e)=>changeHandler(e,'signup')}
              type='password' name='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button
            disabled={registerIsLoading}
            onClick={()=>handleRegistration('singup')}
            
            >

{
                registerIsLoading ?<> <Loader2 className='animate-spin mr-2 h-4 w-4' /> Pls Wait</>: "Sign up"
              }


            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
          
          <div className="space-y-1">
              <Label 
              
              htmlFor="email" placeholder='example@mail.com' >Email</Label>
              <Input 
              value={loginInput.email}
              type='email' name='email'
              onChange={(e)=>changeHandler(e,'login')}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" >Password</Label>
              <Input 
              value={loginInput.password}
              placeholder='eg.123@asfdA&a' onChange={(e)=>changeHandler(e,'login')}
              type='password' name='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button  
            disabled={loginIsLoading}
            onClick={()=>handleRegistration('login')}
            
            
            >
              {
                loginIsLoading ?<> <Loader2 className='animate-spin mr-2 h-4 w-4' /> Pls Wait</>: "login"
              }


            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>


    </div>
  )
}

export default Login