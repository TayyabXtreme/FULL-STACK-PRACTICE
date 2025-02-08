'use client';


import { SessionProvider } from "next-auth/react"
import { any } from "zod";
export default function AuthProvider({
  children,
}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}