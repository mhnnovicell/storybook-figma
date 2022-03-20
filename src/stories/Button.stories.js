import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
  parameters: {
    design: [
      //Notes to self - the link in figma needs to be wrapped in a "Frame" like the test knap is wrapped in a frame element in figma
      {
        name: 'Random Button Design',
        type: 'figspec',
        url: 'https://www.figma.com/file/kAWGJlcI0mTGbDHA1TkW3c/testknap?node-id=23%3A4',
        accessToken: '344633-7d670d90-0b50-432c-a9a9-24af2c5edade',
      },
      {
        name: 'Hørkram Design - Regional Items',
        type: 'figspec',
        url: 'https://www.figma.com/file/x0qTcVhs4GGYVVqiNsNK1w/Regional-items?node-id=11%3A601',
        accessToken: '344633-7d670d90-0b50-432c-a9a9-24af2c5edade',
      },
      {
        name: 'Vuetify UI Kit',
        type: 'figspec',
        url: 'https://www.figma.com/file/rRZ7nGMHU1iIttGZqhOQ7R/vuetifytest?node-id=102%3A2',
         accessToken: '344633-7d670d90-0b50-432c-a9a9-24af2c5edade',
      },
    ],
 }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
