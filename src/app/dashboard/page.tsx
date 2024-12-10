import { Card } from "@/components/card";
import { Upload } from "@/components/upload";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

export default function DashboardPage() {
    const session = getServerSession() 
    if(!session) {
        redirect('/')
    }
  return (
    <>
      <Upload />
      <Card />
    </>
  )
}
