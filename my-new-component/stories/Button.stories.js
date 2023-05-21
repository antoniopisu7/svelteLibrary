
import {Button} from '../src/index.js';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: {type: 'radio'}
    },
    color: {
      control: {type: 'color'}
    },
  }
}

const Template = (args) => ({ Component: Button, props: args });

export const Primary = Template.bind({});
Primary.args = {
  focus: false,
  label: 'Button',
  size: 'medium',
  color: 'cornflowerblue',
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "click me!"};





//Args descrive gli argomenti di Button in modo leggibile dalla macchina.
// Questo sblocca il superpotere di Storybook di alterare e comporre argomenti in modo dinamico.


/*
Il template viene riutilizzato nelle storie.
Template.bind({}) crea una copia della funzione che riduce la duplicazione del codice.
 Allo stesso modo, ...Primary.args crea una copia dei dati, riducendone la duplicazione.
*/