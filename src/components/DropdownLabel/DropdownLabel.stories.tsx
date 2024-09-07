import type { Meta, StoryObj } from '@storybook/react';

import { DropdownLabel } from './DropdownLabel';
import { Dropdown } from '../Dropdown/Dropdown';

const meta = {
  component: DropdownLabel,
  render: ({...args})=>(
    <Dropdown>
      <DropdownLabel {...args}>{args.children}</DropdownLabel>
    </Dropdown>
  ),
  args:{
    variant: "dark",
    children: "Click me!"
  }
} satisfies Meta<typeof DropdownLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};