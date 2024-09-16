'use client'

import React from 'react'
import DarkmodeButton from "@/components/DarkmodeButton"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, FolderDown, Book, Home} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import GitHubIcon from './icons/GitHubIcon'

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
            <DropdownMenuItem onClick={()=> router.replace("/docs")}>
              <Book className='size-4 me-2'/>
              <span>Docs</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='gap-5 hidden md:flex'>
        <Link href={"/"} className='font-bold'>alin-simple-dropdown</Link>
        <Link href={"/docs"} className={`${path === '/docs'? 'font-bold' : 'text-zinc-500'} hover:text-primary`}>Docs</Link>
      </div>
      <div className='flex gap-2 items-center'>
        <Link href="https://github.com/alin1k/simple-dropdown" target='_blank' className='p-1 rounded-lg hover:bg-primary-foreground'>
          <GitHubIcon className="fill-primary"/>
        </Link>
        <DarkmodeButton/>
      </div>
    </div>
  )
}
