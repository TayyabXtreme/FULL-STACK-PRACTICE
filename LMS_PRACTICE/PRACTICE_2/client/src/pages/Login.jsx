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
import { useState } from "react"

const Login=()=>{

    const [loginInput, setLoginInput] = useState({
        email:'',
        password:''
    })

    const [signUpInput, setSignUpInput] = useState({
        name:'',
        email:'',
        password:''
    })

    const changeInputHandler=(e,type)=>{
        const {name,value}=e.target;
        if(type==='signup'){
            setSignUpInput({...signUpInput,[name]:value})
        }else{
            setLoginInput({...loginInput,[name]:value})
            
        }

    }

    const handleRegistration=(type)=>{

        const inputData=type=='signup' ? signUpInput : loginInput
        console.log(inputData)
    }

  return (
<div className='flex items-center w-full justify-center'>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input 
              value={signUpInput.name}
              name='name'
              onChange={(e)=>changeInputHandler(e,'signup')}
              type='text' placeholder='eg. anees' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input 
              name='email'
              value={signUpInput.email}
              onChange={(e)=>changeInputHandler(e,'signup')}
              type='email' placeholder='example@mail.com' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input 
              name='password'
              value={signUpInput.password}
              onChange={(e)=>changeInputHandler(e,'signup')}
              type='password' placeholder='13s@cDar' />
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
              <Label htmlFor="name">Email</Label>
              <Input 
              name='email'
              value={loginInput.email}
              onChange={(e)=>changeInputHandler(e,'login')}
              type='email' placeholder='example@mail.com' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input 
              name='password'
              value={loginInput.password}
              onChange={(e)=>changeInputHandler(e,'login')}
              type='password' placeholder='13s@cDar' />
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