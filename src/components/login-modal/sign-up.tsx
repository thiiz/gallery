import { Dispatch, FC, SetStateAction } from "react"
import { WindowStateProps } from "."
import { motion } from "framer-motion"
import { LoginInput } from "./input"
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const SignUpSchema = z.object({
  user: z.string().min(3, { message: 'Required' }),
  email: z.string().min(1),
  password: z.string().min(6),
  confirmPass: z.string().min(6),
});

export type SignUpFormProps = z.infer<typeof SignUpSchema>

export const SignUp: FC<{ setWindow: Dispatch<SetStateAction<WindowStateProps>>,  setBackground: Dispatch<SetStateAction<boolean>>}> = ({ setWindow, setBackground }) => {
  const toggleWindow = () => {
    setBackground(background => !background)
    setTimeout(()=> {
      setWindow('sign-in')
    }, 500)
  }
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SignUpFormProps>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      user: '',
      email: '',
      password: '',
      confirmPass: '',
    }
  })
  const onSubmit = () => {
    return
  }
  return (
    <div className="relative px-4 py-10 bg-neutral-900 shadow-lg sm:rounded-3xl sm:p-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: .55 }} className="max-w-md">
        <div>
          <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <LoginInput /*register={register('user')}*/ autoComplete="on" type="text" label="Usuário" />
            <LoginInput /*register={register('email')}*/ autoComplete="on" type="email" label="Endereço de email" />
            <LoginInput /*register={register('password')}*/ autoComplete="off" type="password" label="Senha" />
            <LoginInput /*register={register('confirmPass')}*/ autoComplete="off" type="password" label="Confirmar senha" />
            <div className="relative">
              <button className="bg-gradient-to-l from-amber-300 to-amber-600 text-sm font-semibold text-white rounded-md w-full py-2">SIGNIN</button>
            </div>
            <button className="text-gray-50" onClick={toggleWindow}>Já tem uma conta?</button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}