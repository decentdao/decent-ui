import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import foundations from './foundations';
import breakpoints from './breakpoints';
import components from './components';
import styles from './styles';

const theme = extendTheme(
  {
    styles,
    breakpoints,
    ...foundations,
  },
  {
    // @note by applying default theme we can override themed objects so that Chakra-UI defaults aren't extended but replaced
    ...defaultTheme,
    // @note this allows for unthemed defaults to be merged with custom themed components
    components: { ...defaultTheme.components, ...components },
    breakpoints: {},
    colors: {},
    fontWeights: {},
    fonts: {}
  }
);

export default theme;