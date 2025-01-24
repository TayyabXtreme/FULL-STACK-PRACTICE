
'use client';
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supbase/products'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
const SignIn = () => {
  return (
    <div className='mx-auto'>
        <div className='w-1/3 mx-auto'>
        <Auth
    supabaseClient={supabase}

    appearance={{ theme: ThemeSupa}}
    theme='dark'
  />
        </div>
      
    </div>
  )
}

export default SignIn