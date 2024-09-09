'use client'

import React from 'react'
import DarkmodeButton from "@/components/DarkmodeButton"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const path = usePathname()

  return (
    <div className='p-4 px-8 flex flex-row items-center justify-between'>
      <div className='flex gap-5'>
        <h1 className='font-bold'>alin-simple-dropdown</h1>
        <Link href={'#'} className={`${path === '/installation'? 'font-bold' : 'text-zinc-500'} hover:text-gray-200`}>Installation</Link>
        <Link href={"#"} className={`${path === '/docs'? 'font-bold' : 'text-zinc-500'} hover:text-gray-200`}>Docs</Link>
      </div>
      <DarkmodeButton/>
    </div>
  )
}
