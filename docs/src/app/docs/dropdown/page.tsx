import Code from '@/components/ui/code'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


export default function DropdownPage() {
  return (
    <div className='p-2 flex flex-col gap-8'>
      <div>
        <h1 className='text-5xl font-bold mb-3'>Dropdown component</h1>
        <p>This is the main component of the dropdown menu that wraps all the other components</p>
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
              <TableCell><code className='bg-secondary px-1 rounded'>variant</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>light</TableCell>
              <TableCell>light,dark</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Dropdown color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code className='bg-secondary px-1 rounded'>size</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>sm</TableCell>
              <TableCell>sm,md,xl</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Dropdown size</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p className='mt-2'>Children components will inherit the <code className='bg-secondary px-1 rounded'>variant</code> and <code className='bg-secondary px-1 rounded'>color</code> from this component.</p>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-3'>Usage</h1>
        <p>Make sure you wrap all the other components inside the <code className='bg-secondary px-1 rounded'>{'<Dropdown>'}</code> component</p>
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
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-3">Using NextJS 14</h1>
        <p>If you are using NextJS 14 you need to add <code className='bg-secondary px-1 rounded'>'use client'</code> for the dropdown menu to work</p>
        <p>You can create a separate component like the example bellow</p>
        <Code>
{`'use client'

import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from 'alin-simple-dropdown'

export default function MyDropdown() {
  return(
    <Dropdown>
      <DropdownLabel>Click me!</DropdownLabel>
      <DropdownMenu>
        <DropdownButton>Button 1</DropdownButton>
        <DropdownButton>Button 2</DropdownButton>
        <DropdownButton>Button 3</DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
}`}
        </Code>
      </div>
    </div>
  )
}
