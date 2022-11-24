export const argTypes = {
  size: {
    description: "`'base'` `'xl'`",
    options: ["base", "xl"],
    control: {
      type: "radio",
    },
  },
  placeholder: {
    description: "Displayed text when input value is blank",
  },
  isDisabled: {
    type: "boolean",
    description: "If true will display an disabled state",
  },
  isInvalid: {
    type: 'boolean',
    description: "If true will display an error state",
  },
  decimals: {
    type: 'number',
    description: "Prevents character entry beyond given decimal amount",
  },
  leftElement: {
    description: "Displays given element to left of text area",
  },
  rightElement: {
    description: "Displays given element to right of text area",
  },
  rightElementAction: {
    description: "Function called when right element is clicked. RightElement required",
  },
  restrictChars: {
    description: "Restricts characters. use `ENUM`` RestrictCharTypes",
  }
}