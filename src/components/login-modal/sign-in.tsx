import { Dispatch, FC, SetStateAction } from "react"
import { WindowStateProps } from "."
import { motion } from "framer-motion"
import { LoginInput } from "./input"

export const SignIn: FC<{ setWindow: Dispatch<SetStateAction<WindowStateProps>>,  setBackground: Dispatch<SetStateAction<boolean>>}> = ({ setWindow, setBackground }) => {
  const toggleWindow = () => {
    setBackground(background => !background)
    setTimeout(() => {
      setWindow('sign-up')
    }, 500)
  }
  return (
    <div className="relative min-w-[85vw] md:min-w-full p-10 bg-neutral-900 shadow-lg rounded-3xl sm:p-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: .5 }} className="max-w-md">
        <div>
          <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <LoginInput autoComplete="on" label="Endereço de email" /*register={() => { }}*/ type="email" />
            <LoginInput autoComplete="off" label="Senha" /*register={() => { }}*/ type="password" />
            <div className="relative">
              <button className="bg-gradient-to-l from-amber-300 to-amber-600 text-sm font-semibold text-white rounded-md w-full py-2">SIGNIN</button>
            </div>
            <button className="text-gray-50" onClick={toggleWindow}>Não tem uma conta?</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}