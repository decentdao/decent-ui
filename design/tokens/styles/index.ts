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
    '.scroll-container': {
      visibility: 'hidden',
      paddingRight: '12px',
      transition: 'visibility .5s ease-in-out',
    },
    '.scroll-container::-webkit-scrollbar': {
      background: 'transparent',
      width: '8px',
      height: '8px',
    },
    '.scroll-container::-webkit-scrollbar-thumb': {
      border: 'none',
      boxShadow: 'none',
      background: 'blackAlpha.50',
      borderRadius: '8px',
      minHeight: '40px',
    },
    '.scroll-container::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'blackAlpha.800',
    },
    '.scroll-container > div,.scroll-container:hover,.scroll-container:focus': {
      visibility: 'visible',
    },

    'input:not(.step-counter)::-webkit-outer-spin-button, input:not(.step-counter)::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },

    'input: not(.step - counter)[type = number]': {
      '-moz-appearance': 'textfield'
    },

    /** Used to define container behavior: width, position: fixed etc... **/
    '.Toastify__toast-container': {
    },

    /** Used to define the position of the ToastContainer **/
    '.Toastify__toast-container--top-left': {},
    '.Toastify__toast-container--top-center': {},
    '.Toastify__toast-container--top-right': {},
    '.Toastify__toast-container--bottom-left': {},
    '.Toastify__toast-container--bottom-center': {},
    '.Toastify__toast-container--bottom-right': {},

    /** Classes for the displayed toast **/
    '.Toastify__toast': {
      backgroundColor: 'none',
      color: 'grayscale.neutral-50',
      background: 'black.700',
      textAlign: 'center',
    },
    '.Toastify__toast--rtl': {

    },
    '.Toastify__toast-body': {
      fontFamily: 'IBM Plex Sans',
      fontWeight: 500,
    },

    /** Used to position the icon **/
    '.Toastify__toast-icon': {
    },

    /** handle the notificaiton color and the text color based on the theme **/
    '.Toastify__toast-theme--dark': {
    },
    '.Toastify__toast-theme--light': {
    },
    '.Toastify__toast-theme--colored.Toastify__toast--default': {
    },
    '.Toastify__toast-theme--colored.Toastify__toast--info': {
    },
    '.Toastify__toast-theme--colored.Toastify__toast--success': {
    },
    '.Toastify__toast-theme--colored.Toastify__toast--warning': {
    },
    '.Toastify__toast-theme--colored.Toastify__toast--error': {
    },

    '.Toastify__progress-bar': {
      background: 'gold.500'
    },
    '.Toastify__progress-bar--rtl': {
    },
    '.Toastify__progress-bar-theme--light': {
    },
    '.Toastify__progress-bar-theme--dark': {
    },
    '.Toastify__progress-bar--info': {
    },
    '.Toastify__progress-bar--success': {
    },
    '.Toastify__progress-bar--warning': {
    },
    '.Toastify__progress-bar--error': {
    },
    /** colored notifications share the same progress bar color **/
    '.Toastify__progress-bar-theme--colored.Toastify__progressbar--info, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success, .Toastify__progress-bar-theme--col-ored.Toastify__progress-bar--warning, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error': {
    },

    /** Classes for the close button. Better use your own closeButton **/
    '.Toastify__close-button': {
      color: 'white'
    },
    '.Toastify__close-button--default': {
    },
    '.Toastify__close-button > svg': {
    },
    '.Toastify__close-button:hover, .Toastify__close-button:focus': {
    }
  }),
}