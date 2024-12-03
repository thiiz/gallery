import { FC, HTMLInputTypeAttribute, ReactNode } from "react"
import { UseFormRegisterReturn } from "react-hook-form";

interface LoginInputProps {
  label: string;
  autoComplete: 'off' | 'on';
  type: HTMLInputTypeAttribute | undefined;
  // register: UseFormRegisterReturn;
}

export const LoginInput: FC<LoginInputProps> = ({
  label,
  type,
  autoComplete = 'off',
  //register,
}) => {
  return (
    <div className="relative">
      <input /*{...register}*/ autoComplete={autoComplete} type={type} className="bg-transparent text-gray-50 peer placeholder-transparent h-10 w-full border-b-2 border-gray-500  focus:outline-none focus:borer-rose-600" placeholder="Email address" />
      <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm">
        {label}
      </label>
    </div>
  )
}