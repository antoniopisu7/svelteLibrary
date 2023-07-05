import { action } from '@storybook/addon-actions';
import { CheckBox } from '../Components/index.js';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: {type: 'boolean'}
        },
        enabled: {
            control: {type: 'boolean'}
        },
        disabled: {
          control: {type: 'boolean'}
        },
        hovered: {
          control: {type: 'boolean'}
        },
    }
  };

  const Template = (args) => ({ 
    Component: CheckBox,
    props: args,
    on: {
      change: action('onChange'),
    }
  });

  export const Default = Template.bind({});
    Default.args = {
        checked: false,
        enabled: false,
        disabled: false,
        hovered: false,
};

export const Disabled = Template.bind({});
    Disabled.args = {
        checked: false,
        enabled: false,
        disabled: true,
        hovered: false,
};

export const Hovered = Template.bind({});
    Hovered.args = {
        checked: false,
        enabled: false,
        disabled: false,
        hovered: true,
};

