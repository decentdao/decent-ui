import scrollStyles from './scroll'
import inputStyles from './input'
import toastStyles from './toast'

export default {
  global: {
    body: {
      background: 'linear-gradient(180deg, #272520 0%, #1B1A18 100%)',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      height: '100%',
    },
    html: {
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