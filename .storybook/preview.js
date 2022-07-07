import {addDecorator} from '@storybook/react';

import theme from '../design/atoms/theme/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
