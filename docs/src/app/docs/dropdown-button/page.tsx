'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from 'alin-simple-dropdown'
import Code from '@/components/ui/code'

export default function DropdownButtonPage() {
  return (
    <div className='p-2 flex flex-col gap-8'>
      <div>
        <h1 className="text-5xl font-bold mb-3">DropdownButton component</h1>
        <p>This is is the clickable button on the Dropdown Menu</p>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-3'>Props</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Values</TableHead>
              <TableHead>Required</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><code className='bg-secondary px-1 rounded'>clickEvent</code></TableCell>
              <TableCell>{`( )=>any`}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>No</TableCell>
              <TableCell>The function that gets executed when the button is clicked</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold mb-3'>Examples</h1>
        <Code>
{`<Dropdown>
  <DropdownLabel>Click me!</DropdownLabel>
  <DropdownMenu>
    <DropdownButton clickEvent={()=>alert("The button has been clicked")}>Button 1</DropdownButton>
  </DropdownMenu>
</Dropdown>`}
        </Code>
        <div className="py-3 self-center">
          <Dropdown>
            <DropdownLabel>Click me!</DropdownLabel>
            <DropdownMenu>
              <DropdownButton clickEvent={()=>alert("The button has been clicked")}>Button 1</DropdownButton>
            </DropdownMenu>
          </Dropdown> 
        </div>
      </div>
    </div>
  )
}
