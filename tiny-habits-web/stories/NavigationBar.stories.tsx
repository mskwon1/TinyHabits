import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../styles/globals.css';

import { NavigationBar } from '../components/layout/NavigationBar';

export default {
  title: 'Global Navigation Bar',
  component: NavigationBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
