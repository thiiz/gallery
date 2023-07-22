import { IconCamera } from "@/icons/camera"
import Link from "next/link"
import { Search } from "../search"
import Image from "next/image"
import { LoginButton } from "./login/button"

export const Header = () => {
  return (
    <header>
      <div className="container p-4 mx-auto flex justify-between">
        <Link href='/'>
          <IconCamera />
        </Link>
        <Search />
        <LoginButton />
      </div>
    </header>
  )
}