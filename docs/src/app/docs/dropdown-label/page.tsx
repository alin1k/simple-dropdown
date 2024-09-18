'use client'

import Code from '@/components/ui/code'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dropdown, DropdownLabel } from 'alin-simple-dropdown'
import React from 'react'

export default function DropdownLabelPage() {
  return (
    <div className='p-2 flex flex-col gap-8'>
      <div>
        <h1 className="text-5xl font-bold mb-3">DropdownLabel component</h1>
        <p>This is the button that triggers the dropdown menu</p>
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
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>variant</TableCell>
              <TableCell>string</TableCell>
              <TableCell>light</TableCell>
              <TableCell>light,dark</TableCell>
              <TableCell>Dropdown label color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>size</TableCell>
              <TableCell>string</TableCell>
              <TableCell>sm</TableCell>
              <TableCell>sm,md,xl</TableCell>
              <TableCell>Dropdown label size</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-3'>Customization</h1>
        <p>You can customize the dropdown label using <code className='bg-secondary px-1 rounded'>size</code> and <code className='bg-secondary px-1 rounded'>variant</code> props</p>
        <p className='mt-2'><code className='bg-secondary px-1 rounded'>variant</code> prop:</p>
        <Code>
          {`<DropdownLabel variant='dark'>Click me</DropdownLabel>`}
        </Code>
        <Code>
          {`<DropdownLabel variant='light'>Click me</DropdownLabel>`}
        </Code>
        <div className='flex gap-4 mt-4'>
          <Dropdown>
            <DropdownLabel variant='dark'>Click me</DropdownLabel>
          </Dropdown>
          <Dropdown>
            <DropdownLabel variant='light'>Click me</DropdownLabel>
          </Dropdown>
        </div>

        <p className='mt-4'><code className='bg-secondary px-1 rounded'>size</code> prop:</p>
        <Code>
          {`<DropdownLabel size='sm'>Click me</DropdownLabel>`}
        </Code>
        <Code>
          {`<DropdownLabel size='md'>Click me</DropdownLabel>`}
        </Code>
        <Code>
          {`<DropdownLabel size='xl'>Click me</DropdownLabel>`}
        </Code>
        <div className='flex gap-4 mt-4'>
          <Dropdown>
            <DropdownLabel size='sm'>sm</DropdownLabel>
          </Dropdown>
          <Dropdown>
            <DropdownLabel size='md'>md</DropdownLabel>
          </Dropdown>
          <Dropdown>
            <DropdownLabel size='xl'>xl</DropdownLabel>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
