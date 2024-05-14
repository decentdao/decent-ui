export const buttonArgTypes = {
  // hides ref property from controls, causes an error to occur
  as: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    }
  },
  children: {
    description: '`string` `ReactElement`',
  },
  isDisabled: {
    description: 'Changes the state of button to `disabled`',
    control: "boolean",
  },
}