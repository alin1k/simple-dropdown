'use client'

import React from 'react'
import DarkmodeButton from "@/components/DarkmodeButton"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, FolderDown, Book, Home } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

export default function Navbar() {

  const path = usePathname();
  const router = useRouter();

  return (
    <div className='p-4 md:px-8 flex flex-row items-center justify-between'>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className=''>
            <Menu onClick={()=>{console.log("Hi")}} className='hover:cursor-pointer me-2'/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='ms-2'>
            <DropdownMenuLabel>
              <h1 className='font-bold'>alin-simple-dropdown</h1>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> router.replace("/")}>
              <Home className='size-4 me-2'/>
              <span>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> router.replace("/installation")}>
              <FolderDown className='size-4 me-2'/>
              <span>Installation</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> router.replace("/docs")}>
              <Book className='size-4 me-2'/>
              <span>Docs</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='gap-5 hidden md:flex'>
        <Link href={"/"} className='font-bold'>alin-simple-dropdown</Link>
        <Link href={'/installation'} className={`${path === '/installation'? 'font-bold' : 'text-zinc-500'} hover:text-gray-200`}>Installation</Link>
        <Link href={"/docs"} className={`${path === '/docs'? 'font-bold' : 'text-zinc-500'} hover:text-gray-200`}>Docs</Link>
      </div>
      <DarkmodeButton/>
    </div>
  )
}
