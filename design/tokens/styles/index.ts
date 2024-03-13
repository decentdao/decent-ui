import scrollStyles from './scroll'
import inputStyles from './input'
import toastStyles from './toast'

export default {
  global: {
    body: {
      background: '#262521',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      height: '100%',
    },
    html: {
      background: '#262521',
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