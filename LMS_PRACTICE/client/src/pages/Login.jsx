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

const Login = () => {


    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    })

    const [signupInput, setSignupInput] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [registerUser,{data:registerData,error:registerError,isLoading:registerLoading,isSuccess:registerisSuccess}]=useRegisterUserMutation()
    const [loginUser,{data:loginData,error:loginError,isLoading:loginIsLoading,isSuccess:loginIsSuccess}]=useLoginUserMutation()


    const handleRegistration = async (type) => {
        const inputData= type === "signup" ? signupInput : loginInput
        const action=type=="signup" ? registerUser : loginUser
        await action(inputData) 

    }
    useEffect(()=>{
        if(registerisSuccess && registerData){
            toast.success(registerData.message || "Sign up successful.")
        }
        if(loginIsSuccess && loginData){
            toast.success(loginData.message || "login successful.")
        }
        if(registerError){
            toast.error(registerError.data.message || "SingUp Failed")
        }
        if(loginError){
            toast.error(loginError.data.message || "Login Failed")
        }


    },[loginIsLoading,registerLoading,loginData,registerData,loginError,registerError])
    



    return (
        <div className="flex items-center w-full justify-center mt-20">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">SignUp</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>SignUp</CardTitle>
                            <CardDescription>
                                Create a new account and click singup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                value={signupInput.name}
                                onChange={(e) =>
                                    setSignupInput({ ...signupInput, name: e.target.value })
                                }
                                type="text" placeholder="Eg. munib" required={true} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                value={signupInput.email}
                                onChange={(e) =>
                                    setSignupInput({ ...signupInput, email: e.target.value })
                                }
                                type="email" placeholder="example@mail.com" required={true} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                value={signupInput.password}
                                onChange={(e) =>
                                    setSignupInput({ ...signupInput, password: e.target.value })
                                }
                                type="password" placeholder="Eg. xyzabc" required={true} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button 
                            disabled={registerLoading}
                            onClick={() => handleRegistration("signup")}
                            >

{
                                    registerLoading ?<> <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait </>: 'SignUp'
                                }


                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login your password here.After Signup, you'll be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                value={loginInput.email}
                                onChange={(e) =>
                                    setLoginInput({ ...loginInput, email: e.target.value })
                                }
                                type="email" placeholder="example@mail.com" required={true} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                value={loginInput.password}
                                onChange={(e) =>
                                    setLoginInput({ ...loginInput, password: e.target.value })
                                }
                                type="password" placeholder="Eg. xyzabc" required={true} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                            disabled={loginIsLoading}
                            onClick={() => handleRegistration("login")}
                            >
                                {
                                    loginIsLoading ?<> <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait </>: 'Login'
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