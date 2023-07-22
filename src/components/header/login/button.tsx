'use client'

import { LoginModal } from "@/components/login-modal"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence } from 'framer-motion';
export const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(prev => !prev)}>
        <div className="relative w-10 h-10 rounded-full">
          <Image fill className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" />
        </div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen ? <LoginModal setState={setIsOpen} /> : null}
      </AnimatePresence>
    </>
  )
}