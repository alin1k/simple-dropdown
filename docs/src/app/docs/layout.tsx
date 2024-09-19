import React from 'react'
import Sidebar from './_components/Sidebar'

export default function DocsLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='w-full flex md:px-6'>
      <Sidebar/>
      <div className="w-full md:w-10/12 lg:w-8/12">
        {children}
      </div>
    </div>
  )
}
