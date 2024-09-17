import React from 'react'
import Sidebar from './_components/Sidebar'

export default function DocsLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='w-full flex px-6'>
      <Sidebar/>
      {children}
    </div>
  )
}
