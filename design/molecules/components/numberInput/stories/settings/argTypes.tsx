export const argTypes = {
  value: {
    description: "Input component's value",
    type: {
      required: false
    },
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'string'
      }
    },
    control: false
  },
  onChange: {
    description: "Input component's change event handler",
    table: {
      defaultValue: {
        summary: undefined
      },
    },
  },
  precision: {
    description: "The number of decimal points used to round the value",
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'number'
      }
    },
    control: 'number'
  },
  size: {
    type: {
      required: false
    },
    table: {
      defaultValue: {
        summary: 'base'
      },
      type: {
        summary: 'base | baseAddonLeft | baseAddonRight | baseWithAddons | xl | xlAddonRight | xlAddonRight | xlWithAddons'
      }
    },
    description: "controls the size of the import",
    options: [
      "base", 
      "xl", 
      "baseAddonLeft",
      "baseAddonRight",
      "baseWithAddons",
      "xlAddonLeft",
      "xlAddonRight",
      "xlWithAddons"
    ],
    control: {
      type: "radio",
    },
  },
  placeholder: {
    description: "Displayed text when input value is `undefined`",
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'string'
      }
    },
    control: "text"
  },
  disabled: {
    description: "If true will display an disabled state",
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'boolean'
      }
    },
    control: "boolean",
  },
  isInvalid: {
    description: "If true will display an error state",
    table: {
      defaultValue: {
        summary: undefined
      },
      type: {
        summary: 'boolean'
      }
    },
    control: 'boolean',
  },
}