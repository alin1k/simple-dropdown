import Link from 'next/link'
import React from 'react'

export default function DocsLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='w-full flex px-6'>
      <div className='pe-16 flex flex-col gap-1'>
        <Link href={"/docs/getting-started"} className='hover:underline text-zinc-500'>Getting started</Link>
        <p className='mt-4 mb-1 font-semibold'>Components</p>
        <Link href={"#"} className='hover:underline text-zinc-500'>Dropdown</Link>
        <Link href={"#"} className='hover:underline text-zinc-500'>DropdownLabel</Link>
        <Link href={"#"} className='hover:underline text-zinc-500'>DropdownMenu</Link>
        <Link href={"#"} className='hover:underline text-zinc-500'>DropdownButton</Link>
      </div>
      {children}
    </div>
  )
}
