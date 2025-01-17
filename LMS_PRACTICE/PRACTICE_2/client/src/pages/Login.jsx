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
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

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

    const [registerUser,{data:registerData,error:registerError,isLoading:registerIsLoading,isSuccess:registerIsSucess}]=useRegisterUserMutation()
    const [loginUser,{data:loginData,error:LoginError,isLoading:LoginIsLoading,isSuccess:loginIsSucess}]=useLoginUserMutation()

    const changeInputHandler=(e,type)=>{
        const {name,value}=e.target;
        if(type=="signup"){
          setSignUpInput({...signUpInput,[name]:value})
        }else{
          setLoginInput({...loginInput,[name]:value})
        }
        

    }

    const handleRegistration=async(type)=>{

        const inputData=type=='signup' ? signUpInput : loginInput
        console.log(inputData)
        
        const action=type =='signup' ? registerUser : loginUser
        console.log(LoginIsLoading)
        await action(inputData)
        console.log(LoginIsLoading)
        
    }

    useEffect(()=>{

      if(registerIsSucess && registerData){
        console.log(registerData)
        toast.success(registerData.message || 'SignUp successfully')
      }

      if(loginIsSucess && loginData){
        console.log(loginData)
        toast.success(loginData.message || 'Login successfully')
      }

      if(registerError){
       
        toast(registerError.data.message || "Sign up failed")
      }

      if(LoginError){
        
        toast.error(LoginError.data.message  || 'Login failed')
      }


    },[LoginIsLoading,registerIsLoading,loginData,registerData,registerError])

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
            disabled={registerIsLoading}
            onClick={()=>handleRegistration('signup')}
            >{
              registerIsLoading ? (
                <>
                <Loader2  className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                </>
              ):(
                'sign up'
              )
            }</Button>
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
            disabled={LoginIsLoading}
            onClick={()=>handleRegistration('login')}
            > 
        {
          LoginIsLoading ? (
            <>
            <Loader2  className="mr-2 h-4 w-4 animate-spin" /> Please Wait
            </>
          ):(
            'Login'
          )
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