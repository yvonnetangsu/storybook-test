import { Card } from './Card';

export default {
  title: 'Composite/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  variant: 'vertical',
  title: "I'm a vertical card",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: 'horizontal',
  title: "I'm a horizontal card",
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: 'minimal',
  title: "I'm a minimal card",
};
