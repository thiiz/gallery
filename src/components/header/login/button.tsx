import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GoogleButton } from "@/components/ui/google_button"
import { Skeleton } from "@/components/ui/skeleton"
import { getServerSession } from "next-auth"

export const LoginButton = async () => {
  const session = await getServerSession() 
  console.log(session)
  return (
    <>
    {!session ? 
      <Button asChild>
      <GoogleButton/>
      </Button>
    :
      <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
              <AvatarImage src="https://github.com/shadcn.png"/>
              <AvatarFallback asChild><Skeleton className="h-10 w-10 rounded-full"/></AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem className="font-bold uppercase underline underline-offset-1">sair</DropdownMenuItem>
      </DropdownMenuContent>
  </DropdownMenu>
  }
      
      
    </>
  )
}