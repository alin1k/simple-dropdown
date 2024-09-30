import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Dropdown } from './Dropdown';
import { DropdownLabel } from '../DropdownLabel';
import { DropdownButton } from '../DropdownButton';

const meta = {
  component: Dropdown,
  render: ({...args})=>(
    <Dropdown {...args}>
      <DropdownLabel>Click me!</DropdownLabel>
      <DropdownMenu>
        <DropdownButton>Button1</DropdownButton>
        <DropdownButton>Button2</DropdownButton>
        <DropdownButton>Button3</DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};