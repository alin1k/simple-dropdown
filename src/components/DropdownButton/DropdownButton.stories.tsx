import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownLabel } from '../DropdownLabel';
import { DropdownButton } from '../DropdownButton';

const meta = {
  component: DropdownButton,
  render: ({...args})=>(
    <Dropdown>
      <DropdownLabel>Click me!</DropdownLabel>
      <DropdownMenu>
        <DropdownButton {...args}>Button1</DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "children"
  }
};