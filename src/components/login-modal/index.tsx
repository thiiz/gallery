import { Dispatch, FC, SetStateAction, useState } from "react"
import { LoginBackground } from "./background"
import { SignIn } from "./sign-in"
import { SignUp } from "./sign-up"
import { motion, AnimatePresence } from 'framer-motion';
export type WindowStateProps = 'sign-in' | 'sign-up'

export const LoginModal: FC<{ setState: Dispatch<SetStateAction<boolean>> }> = ({ setState }) => {
  const [window, setWindow] = useState<WindowStateProps>('sign-in')

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-10">
      <motion.div initial={{ opacity: 0, pointerEvents: 'none' }} transition={{ duration: .45 }} animate={{ opacity: 1, transitionEnd: { pointerEvents: 'auto' } }} onClick={() => setState(false)} className="bg-zinc-950/80 backdrop-blur-md absolute w-full h-full top-0 left-0 justify-center items-center z-10" />
      <div className="z-50 absolute left-1/2 -translate-x-1/2 my-12">
        <LoginBackground handler={window} />
        {window === 'sign-in' ?
          <SignIn setWindow={setWindow} />
          :
          window === 'sign-up' ?
            <SignUp setWindow={setWindow} />
            :
            ''
        }
      </div >
    </div >
  )
}