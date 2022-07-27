export const FONT_WEIGHT = {
  BOLD: 700,
  SEMI: 600,
  MEDIUM: 500,
  NORMAL: 400
}

const FONT_FAMILY = {
  MONO: 'IBM Plex Mono, monospace',
  SANS: 'IBM Plex Sans',
}
const textStyles = {
  'text-6xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '3em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '4.25em',
    letterSpacing: '1.92px'
  },
  'text-5xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '2.5em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '4.25em',
    letterSpacing: '1.92px'
  },
  'text-4xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '2em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '3.75em',
    letterSpacing: '1.2px'
  },
  'text-4xl-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '2em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '3.75em',
    letterSpacing: '1.2px'
  },
  'text-3xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '1.875em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '2.75em',
    letterSpacing: '0.96px'
  },
  'text-3xl-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '1.875em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '2.75em',
    letterSpacing: '0.96px'
  },
  'text-2xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '1.625em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '2.375em',
    letterSpacing: '0.28px'
  },
  'text-2xl-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '1.625em',
    fontWeight: FONT_WEIGHT.SEMI,
    lineHeight: '2.375em',
    letterSpacing: '0.28px'
  },
  'text-xl-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '1.375em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '2.125em'
  },
  'text-xl-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '1.375em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '2.125em'
  },
  'text-lg-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '1.25em',
    fontWeight: FONT_WEIGHT.SEMI,
    letterSpacing: '0.04em',
    lineHeight: '1.75em'
  },
  'text-lg-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '1.25em',
    fontWeight: FONT_WEIGHT.SEMI,
    letterSpacing: '0.04em',
    lineHeight: '1.75em'
  },
  'text-button': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '1em',
    fontWeight: FONT_WEIGHT.SEMI,
    letterSpacing: '0.64px',
    lineHeight: '1.5em'
  },
  'text-button-sm': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '0.875em',
    fontWeight: FONT_WEIGHT.SEMI,
    letterSpacing: '0.64px',
    lineHeight: '1.75em'
  },
  'text-base': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '0.75em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    letterSpacing: '0px',
    lineHeight: '1.5em'
  },
  'text-base-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '0.75em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    letterSpacing: '0px',
    lineHeight: '1.5em'
  },
  'text-sm-sans': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '0.75em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    letterSpacing: '0px',
    lineHeight: '1.25em'
  },
  'text-sm-sans-regular': {
    fontFamily: FONT_FAMILY.SANS,
    fontSize: '0.75em',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '0px',
    lineHeight: '1.25em'
  },
  'text-sm-mono': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '0.75em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    letterSpacing: '0px',
    lineHeight: '1.25em'
  },
  'text-xs': {
    fontFamily: FONT_FAMILY.MONO,
    fontSize: '0.625em',
    fontWeight: FONT_WEIGHT.MEDIUM,
    letterSpacing: '0px',
    lineHeight: '1em'
  }
}

export default textStyles