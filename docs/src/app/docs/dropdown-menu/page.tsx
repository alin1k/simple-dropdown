'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from 'alin-simple-dropdown'
import Code from '@/components/ui/code'


export default function DropdownMenuPage() {
  return (
    <div className='p-2 flex flex-col gap-8'>
      <div>
        <h1 className="text-5xl font-bold mb-3">DropdownMenu component</h1>
        <p>This component wraps all the dropdown buttons</p>
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
              <TableCell>Dropdown menu color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code className='bg-secondary px-1 rounded'>size</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>sm</TableCell>
              <TableCell>sm,md,xl</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Dropdown menu size</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold mb-3'>Examples</h1>
        <p className='mt-2'><code className='bg-secondary px-1 rounded'>variant</code> prop:</p>
        <Code>
{`<Dropdown>
  <DropdownLabel variant='dark'>Click me!</DropdownLabel>
  <DropdownMenu variant='dark'>
    <DropdownButton>Button 1</DropdownButton>
    <DropdownButton>Button 2</DropdownButton>
    <DropdownButton>Button 3</DropdownButton>
  </DropdownMenu>
</Dropdown>`}
        </Code>
        <div className="py-3 self-center">
          <Dropdown>
            <DropdownLabel variant='dark'>Click me!</DropdownLabel>
            <DropdownMenu variant='dark'>
              <DropdownButton>Button 1</DropdownButton>
              <DropdownButton>Button 2</DropdownButton>
              <DropdownButton>Button 3</DropdownButton>
            </DropdownMenu>
          </Dropdown> 
        </div>
        <p className='mt-2'><code className='bg-secondary px-1 rounded'>size</code> prop:</p>
        <Code>
{`<Dropdown>
  <DropdownLabel>Click me!</DropdownLabel>
  <DropdownMenu size='xl'>
    <DropdownButton>Button 1</DropdownButton>
    <DropdownButton>Button 2</DropdownButton>
    <DropdownButton>Button 3</DropdownButton>
  </DropdownMenu>
</Dropdown>`}
        </Code>
        <div className="py-3 self-center">
          <Dropdown>
            <DropdownLabel>Click me!</DropdownLabel>
            <DropdownMenu size="xl">
              <DropdownButton>Button 1</DropdownButton>
              <DropdownButton>Button 2</DropdownButton>
              <DropdownButton>Button 3</DropdownButton>
            </DropdownMenu>
          </Dropdown> 
        </div>
      </div>
    </div>
  )
}
