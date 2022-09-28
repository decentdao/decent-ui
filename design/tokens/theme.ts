import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import foundations from './foundations';
import breakpoints from './breakpoints';
import components from '../atoms/components/theme';

const theme = extendTheme(
  {
    components,
    ...foundations,
  },
  {
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints,
    zIndices: defaultTheme.zIndices,
    components: {},
    styles: {},
    borders: {},
    colors: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
);
export default theme;