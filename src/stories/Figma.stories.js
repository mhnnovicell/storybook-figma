 export default {
    title: 'Figma',
    component: MyButton,
    argTypes: {
      backgroundColor: { control: 'color' },
      size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
      onClick: {},
    },
    parameters: {
        design: {
           type: 'figma',
           url: 'https://www.figma.com/file/HSFEnRMy14U46klJNRPVPF/vuetify-ui-dark-kit?node-id=0%3A1'
        }
     }
  };