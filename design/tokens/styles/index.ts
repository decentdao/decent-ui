import scrollStyles from './scroll'
import inputStyles from './input'
import toastStyles from './toast'
import web3modalStyles from './web3modal'

export default {
  global: () => ({
    body: {
      background: 'radial-gradient(57.89% 57.89% at 27.05% 0%, rgba(250, 189, 46, 0.24) 0%, rgba(250, 189, 46, 0) 100%)',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      height: '100%',
    },
    html: {
      background: 'linear-gradient(180deg, #272520 0%, #1B1A18 100%)',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      scrollBehavior: 'smooth',
      height: '100%',
    },
    ...scrollStyles,
    ...inputStyles,
    ...toastStyles,
    ...web3modalStyles
  }),
}