import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from './DropdownMenu';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownLabel } from '../DropdownLabel';
import { DropdownButton } from '../DropdownButton';

const meta = {
  component: DropdownMenu,
  render: ({...args})=>(
    <Dropdown>
      <DropdownLabel variant={args.variant} size={args.size}>Click me!</DropdownLabel>
      <DropdownMenu {...args}>
        <DropdownButton>Button1</DropdownButton>
        <DropdownButton>Button2</DropdownButton>
        <DropdownButton>Button3</DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};