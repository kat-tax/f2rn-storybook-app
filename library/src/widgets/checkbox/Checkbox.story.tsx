import {Checkbox as Component} from 'react-exo/checkbox';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Widgets/Checkbox',
  component: Component,
};

export const Checkbox: Story = {
  args: {

  },
};

export default meta;
