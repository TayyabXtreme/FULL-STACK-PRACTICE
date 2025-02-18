import { Menu, School } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
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
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import DarkMode from './DarkMode'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { store } from '@/app/store'

const NavBar = () => {
    const {user}=useSelector(store=>store.auth)
    // console.log(user.photoUrl)
    const [logoutUser,{data,isSuccess}]=useLogoutUserMutation()
    const navigate=useNavigate()
    useEffect(()=>{
      if(isSuccess){

      toast.success(data.message || 'user logout successfyll')
      navigate('/login')

      }
    },[isSuccess])
   

    const logoutHandler=async()=>{
      await logoutUser()
    }

  return (
    <div className=' px-4 h-16 dark:bg-[#0a0a0a] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
     {/* Desktop screen */}
        <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className='flex items-center gap-2'>
        <School size={'30'}/>
        <Link to='/'>
        <h1 className='hidden md:block font-extrabold text-2xl' >E_Learning</h1>
        </Link>
        </div>

        <div className='flex items-center gap-8'>   

            {
                user ? (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <Avatar>
      <AvatarImage src={user.photoUrl} alt="userphoto" />
      <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
      
    </Avatar>
  
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link to='my-learning'>
            My learning
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link to='profile'>
            Edit Profile
            </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logoutHandler } >
            Logout
            
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
                    {
                      user.role=='instructor' ? (
                        <>
                        <DropdownMenuSeparator />
      
        
        <DropdownMenuItem>
          Dashboard
         
        </DropdownMenuItem>
        </>
                      ): ''
                    }

        
      </DropdownMenuContent>
    </DropdownMenu>
    ):
    <div className='flex items-center gap-2'>
    <Button variant={'outline'} >
       <Link to='/login'>
                Login
                </Link>
      </Button>
    <Button> <Link to='/login'>
              Sign up
              </Link></Button>
    </div>
}

<DarkMode/>


            
        </div>
        

        </div>

        {/* Mobile Devices */}
        <div className='flex md:hidden items-center justify-between px-4 h-full'>
            <h1 className='font-extrabold text-3xl'>E_Learning</h1>
        <MobileNavbar/>

        </div>
        

    </div>
  )
}

export default NavBar


const MobileNavbar=()=>{
     const role='instructor'
    return (

        <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' className='rounded-full bg-gray-200 hover:bg-gray-200' variant="outline">

        <Menu/>

          </Button>
        </SheetTrigger>
        <SheetContent className='pt-10 flex flex-col'>
          <SheetHeader className={'flex flex-row items-center justify-between'}>
            <SheetTitle>
            <Link to='/'>
                E_Learning
            </Link>
                </SheetTitle>
            <DarkMode/>
          </SheetHeader>
          <Separator className='mr-2' />
          <nav className='flex flex-col flex-y-4'>
            <span>
            <Link to='my-learning'>
                My Learning
                </Link>
                </span>
            <span>
            <Link to='profile'>
                Edit Profile
                </Link>
                </span>
            <span>Log out</span>
          </nav>
          {
            role==='instructor' && (
                <SheetFooter>
                <SheetClose asChild>
                  <Button className='w-full' type="submit">Dashboard</Button>
                </SheetClose>
              </SheetFooter>

            )
          }
         
        </SheetContent>
      </Sheet>

    )
}