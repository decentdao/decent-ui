import * as icons from "../../icons/src"

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
  leftIcon: {
    options: ["None", ...Object.keys(icons)],
    mapping: Object.entries(icons).reduce(
      (prev, [iconName, Icon]) => ({ ...prev, [iconName]: <Icon /> }),
      { None: undefined }
    ),
    control: {
      labels: Object.keys(icons).reduce((prev, cur) => ({ ...prev, [cur]: cur }), {
        None: "None",
      }),
      type: "select",
    },
  },
  rightIcon: {
    options: ["None", ...Object.keys(icons)],
    mapping: Object.entries(icons).reduce(
      (prev, [iconName, Icon]) => ({ ...prev, [iconName]: <Icon /> }),
      { None: undefined }
    ),
    control: {
      labels: Object.keys(icons).reduce((prev, cur) => ({ ...prev, [cur]: cur }), {
        None: "None",
      }),
      type: "select",
    },
  },
  children: {
    description: '`string` `ReactElement`',
  },
  isDisabled: {
    description: 'Changes the state of button to `disabled`',
    control: "boolean",
  },
}