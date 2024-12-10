'use client'

import { LoginModal } from "@/components/login-modal"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(prev => !prev)}>
      <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </button>
      <AnimatePresence mode="wait">
        {isOpen ? <LoginModal setState={setIsOpen} /> : null}
      </AnimatePresence>
    </>
  )
}