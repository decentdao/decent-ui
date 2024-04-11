import scrollStyles from './scroll'
import inputStyles from './input'
import toastStyles from './toast'

export default {
  global: {
    body: {
      background: 'neutral-1',
      backgroundRepeat: 'no-repeat',
      // @todo
      color: 'white',
      height: '100%',
    },
    html: {
      background: 'neutral-1',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      scrollBehavior: 'smooth',
      height: '100%',
    },
    ...scrollStyles,
    ...inputStyles,
    ...toastStyles
  },
}