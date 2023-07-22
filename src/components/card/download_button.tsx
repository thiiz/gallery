'use client'
import { BiSolidDownload } from "react-icons/bi"

export const DownloadButton = () => {
  return (
    <button className=" mx-auto px-8 h-9 text-xl flex gap-x-2 justify-start items-center">
      <BiSolidDownload />
      <span className="text-base font-bold">Download</span>
    </button>
  )
}