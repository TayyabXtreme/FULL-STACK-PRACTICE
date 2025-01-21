import { Menu, School } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from './DarkMode'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'



const Navbar = () => {

    const [logoutUser, { data, isSuccess }] = useLogoutUserMutation()
    const naviagate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || 'Logout successfully')
            naviagate('/login')
        }

    }, [isSuccess])

    const logoutHandler = async () => {
        await logoutUser()
    }

    const { user } = useSelector(store => store.auth)



    return (
        <div className='px-4 h-16 dark:bg-[#0a0a0a] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 right-0 left-0 duration-300 z-10'>
            {/* //dekstop  */}
            <div className='md:flex max-w-7xl mx-auto hidden justify-between items-center gap-10 h-full'>
                <div className='flex items-center gap-2'>
                    <School size={'30'} />
                    <Link to='/'>
                    <h1 className='hidden md:block font-extrabold text-2xl cursor-pointer hover:animate-pulse' >E_Learning</h1>
                    </Link>
                </div>


                <div className='flex items-center gap-5'>

                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src={user.photoUrl} alt="@shadcn" />
                                        <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Link to='/my-learning'>
                                                My Learning
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to='/profile'>
                                                Edit Profile
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem onClick={logoutHandler} >
                                            Logout

                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                    {
                                        user.role === 'instructor' ? (
                                            <>

                                                <DropdownMenuSeparator />


                                                <DropdownMenuItem  onClick={()=>naviagate('/admin')}>
                                                    Dashboard

                                                </DropdownMenuItem>


                                            </>
                                        ) : ''
                                    }

                                </DropdownMenuContent>
                            </DropdownMenu>

                        ) : (
                            <div className='flex items-center gap-2'>
                                <Button variant='outline'
                                onClick={()=>naviagate('/login')}
                                >Login</Button>
                                <Button
                                onClick={()=>naviagate('/login')}
                                >Sign up</Button>
                            </div>
                        )

                    }

                    <DarkMode />


                </div>

            </div>
            {/* //mobile devices */}
            <div className='flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl'>E_Learning</h1>
                <MobileNavbar logoutHandler={logoutHandler} navigator={naviagate} />
            </div>


        </div>
    )
}

export default Navbar


const MobileNavbar = ({ logoutHandler ,navigator}) => {
    const role = 'instructor'
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className='rounded-full bg-gray-200 text-black hover:bg-gray-300' variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <SheetHeader className={'flex flex-row items-center justify-between mt-4'}>
                    <SheetTitle>
                        <Link to='/'>
                        E_Learning
                        </Link>
                        </SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator />
                <nav className='flex flex-col space-y-4'>
                    <span>
                        <Link to='/my-learning'>
                            My Learning
                        </Link>
                    </span>
                    <span>
                        <Link to='/profile'>
                            Edit profile
                        </Link>
                    </span>
                    <span onClick={logoutHandler} >Logout</span>
                </nav>
                {
                    role == 'instructor' ? (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit" className='w-full'
                                onClick={()=>navigator('/admin')}
                                >Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    ) : ''
                }

            </SheetContent>
        </Sheet>
    )
}