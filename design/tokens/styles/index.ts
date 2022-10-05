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
  }),
}