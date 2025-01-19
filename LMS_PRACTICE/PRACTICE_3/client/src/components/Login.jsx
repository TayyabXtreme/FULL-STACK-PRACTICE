import React, { useState } from 'react'
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

const Login = () => {

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

    
    const handleRegistration=(type)=>{
       const inputData= type =='signup' ? signUpInput : loginInput
       console.log(inputData)
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
            onClick={()=>handleRegistration('signup')}
            
            >Sign up</Button>
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
            onClick={()=>handleRegistration('login')}
            
            
            >Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>


    </div>
  )
}

export default Login