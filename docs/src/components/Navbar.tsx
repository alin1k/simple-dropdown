'use client'

import React from 'react'
import DarkmodeButton from "@/components/DarkmodeButton"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Book, Home } from 'lucide-react'
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
            <DropdownMenuLabel onClick={()=> router.replace("/")} className='hover:cursor-pointer'>
              <h1 className='font-bold'>alin-simple-dropdown</h1>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> router.replace("/docs/getting-started")}>
              <Book className='size-4 me-2'/>
              <span>Getting started</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> router.replace("/docs/dropdown")}>
              <span>Dropdown</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> router.replace("/docs/dropdown-label")}>
              <span>DropdownLabel</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> router.replace("/docs/dropdown-menu")}>
              <span>DropdownMenu</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> router.replace("/docs/dropdown-button")}>
              <span>DropdownButton</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='gap-5 hidden md:flex'>
        <Link href={"/"} className='font-bold'>alin-simple-dropdown</Link>
        <Link href={"/docs/getting-started"} className={`${path.includes("/docs") ? 'font-bold' : 'text-zinc-500'} hover:text-primary`}>Docs</Link>
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
