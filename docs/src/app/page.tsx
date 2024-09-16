import Link from 'next/link'
import React from 'react'
import { Book } from 'lucide-react'

export default function HomePage() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center text-center'>
      <h1 className='text-3xl mb-1'>Welcome to <span className='font-bold'>alin-simple-dropdown</span></h1>
      <p className='mb-16'>easy to use Dropdown component for your React applications</p>
      <div className='flex gap-2 p-1 md:w-1/2 xl:w-1/3'>
        <Link href={"/docs/getting-started"} className='text-start border rounded-lg px-3 p-2 w-1/2 hover:bg-primary-foreground'>
          <span className='font-bold block mb-2'>Getting started →</span>
          Set up the library for your React application
        </Link>
        <Link href={"/docs"} className='text-start border rounded-lg px-3 p-2 w-1/2 hover:bg-primary-foreground'>
          <span className='font-bold block mb-2'>Docs <Book className='inline size-3.5 ms-1'/></span>
          Read the documentation
        </Link>
      </div>
    </div>
  )
}
