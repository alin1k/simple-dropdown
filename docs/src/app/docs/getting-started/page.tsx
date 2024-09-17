import Code from '@/components/ui/code'
import React from 'react'

export default function InstallationPage() {
  return (
    <div className='p-2 flex flex-col gap-8'>
      <div>
        <h1 className='text-5xl font-bold mb-3'>Getting started</h1>
        <p><span className='font-semibold'>alin-simple-dropdown</span> is a React component library that offers a easy to use Dropdown menu for your applications</p>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-3'>Installation</h1>
        <p>Install the npm package</p>
        <Code>npm install alin-simple-dropdown</Code>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-3'>Usage</h1>
        <p>1. Import <code className='bg-secondary px-1 rounded'>alin-simple-dropdown</code> after installation</p>
        <Code>{`import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from 'alin-simple-dropdown'`}</Code>
        <p>2. Add the dropdown menu to your application</p>
        <Code>
{`<Dropdown>
  <DropdownLabel>Click me!</DropdownLabel>
  <DropdownMenu>
    <DropdownButton>Button 1</DropdownButton>
    <DropdownButton>Button 2</DropdownButton>
    <DropdownButton>Button 3</DropdownButton>
  </DropdownMenu>
</Dropdown>`}
        </Code>

        <p className='my-2'><span className='text-red-500 font-bold'>IMPORTANT!</span> If your are using NextJS, make sure you add <span className='font-bold'>'use client'</span></p>
      </div>
    </div>
  )
}
