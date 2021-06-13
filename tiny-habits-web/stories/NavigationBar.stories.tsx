import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../styles/globals.css';

import {
  NavigationBar,
  NavigationBarProps,
} from '../components/layout/NavigationBar';

export default {
  title: 'Global Navigation Bar',
  component: NavigationBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  buttonColor: false,
};
