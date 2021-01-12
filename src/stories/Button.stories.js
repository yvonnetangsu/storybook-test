import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  /*
  argTypes: {
    backgroundColor: { control: 'color' },
  }, */
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

export const Big = Template.bind({});
Big.args = {
  big: true,
  label: 'Big Button',
};
