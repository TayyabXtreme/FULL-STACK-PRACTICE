import { Menu, School } from 'lucide-react'
import React from 'react'
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


const Navbar = () => {
    const user = false
    
    return (
        <div className='px-4 h-16 dark:bg-[#0a0a0a] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 right-0 left-0 duration-300 z-10'>
                {/* //dekstop  */}
            <div className='md:flex max-w-7xl mx-auto hidden justify-between items-center gap-10 h-full'>
                <div className='flex items-center gap-2'>
                    <School size={'30'} />
                    <h1 className='hidden md:block font-extrabold text-2xl' >E_Learning</h1>
                </div>


                <div className='flex items-center gap-5'>

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
                                            Edit Profile

                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Logout

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
                                <Button variant='outline'>Login</Button>
                                <Button >Sign up</Button>
                            </div>
                        )

                    }

                    <DarkMode />


                </div>

            </div>
                    {/* //mobile devices */}
                    <div className='flex md:hidden items-center justify-between px-4 h-full'>
                    <h1 className='font-extrabold text-2xl'>E_Learning</h1>
                    <MobileNavbar/>
                    </div>
           
                    
        </div>
    )
}

export default Navbar


const MobileNavbar=()=>{
    const role='instructor'
    return (
        <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' className='rounded-full bg-gray-200 text-black hover:bg-gray-300' variant="outline">
            <Menu/>
          </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
          <SheetHeader className={'flex flex-row items-center justify-between mt-4'}>
            <SheetTitle>E_Learning</SheetTitle>
                <DarkMode/>
          </SheetHeader>
          <Separator />
          <nav className='flex flex-col space-y-4'>
            <span>My Learning</span>
            <span>Edit profile</span>
            <span>Logout</span>
          </nav>
          {
            role=='instructor' ? (
                <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className='w-full'>Dashboard</Button>
                </SheetClose>
              </SheetFooter>
            ) : ''
          }
         
        </SheetContent>
      </Sheet>
    )
}