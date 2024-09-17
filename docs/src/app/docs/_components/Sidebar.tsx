'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {

  const path = usePathname()

  return (
    <div className='pe-16 flex-col gap-1 hidden md:flex'>
      <Link href={"/docs/getting-started"} className={`font-semibold hover:underline ${path === "/docs/getting-started" ? '' : 'text-zinc-500' }`}>Getting started</Link>
      <p className='mt-4 mb-1 font-bold'>Components</p>
      <Link href={"#"} className={`font-semibold hover:underline ${path === "/docs/dropdown" ? '' : 'text-zinc-500' }`}>Dropdown</Link>
      <Link href={"#"} className={`font-semibold hover:underline ${path === "/docs/dropdown-label" ? '' : 'text-zinc-500' }`}>DropdownLabel</Link>
      <Link href={"#"} className={`font-semibold hover:underline ${path === "/docs/dropdown-menu" ? '' : 'text-zinc-500' }`}>DropdownMenu</Link>
      <Link href={"#"} className={`font-semibold hover:underline ${path === "/docs/dropdown-button" ? '' : 'text-zinc-500' }`}>DropdownButton</Link>
    </div>
  )
}
