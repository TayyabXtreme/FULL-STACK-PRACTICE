import { Menu, School } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import DarkMode from '@/DarkMode'


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@radix-ui/react-dropdown-menu'




const Navbar = () => {
  const user = false
 
  return (
    <div className='px-4 h-16 dark:bg-[#0a0a0a] bg-white border-b dark:border-b-gray-800  border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
{/* {Dekstop} */}
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full ' >

        <div className='flex items-center gap-2'>
          <School size={'30'} />
          <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>

        </div>

        <div className='flex items-center gap-8'>


          {
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      My Learning

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      EditProfile

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Log out

                    </DropdownMenuItem>

                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    Dashboard

                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex items-center gap-2'>
                <Button variant='outline' >Login</Button>
                <Button  >SignUp</Button>
              </div>
            )


          }
          <DarkMode />

        </div>


      </div>
    {/* Mobile devices */}
    <div className='flex md:hidden items-center justify-between px-4 h-full'>
    <h1 className='font-extrabold text-2xl'>E_Learning</h1>
    <MobileNavBar/>
    </div>
          
    
    </div>
  )
}

export default Navbar



const MobileNavBar=()=>{
   const role='instructor'
  return(
    <Sheet>
    <SheetTrigger asChild>
      <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-300" variant="outline">
        <Menu/>
      </Button>
    </SheetTrigger>
    <SheetContent className={'flex flex-col'}>
      <SheetHeader className={'flex flex-row items-center justify-between mt-2'}>
        <SheetTitle>E_Learning</SheetTitle>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DarkMode/>
            </DropdownMenuTrigger>
        </DropdownMenu>
        
      </SheetHeader>
      <Separator className='mr-2'/>
      <nav className='flex flex-col space-y-4'>
          <span>My Learning</span>
          <span>Edit profile</span>
          <p>Log out</p>
      </nav>

      {
        role==='instructor' && (

       
     
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Dashboard</Button>
        </SheetClose>
      </SheetFooter>

)
}


    </SheetContent>
  </Sheet>

  )
}