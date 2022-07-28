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

type FontSize = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const FONT_SIZES = {
  '6xl': {
    fontSize: '3em',
    lineHeight: '4.25',
    letterSpacing: '1.92px'
  },
  '5xl': {
    fontSize: '2.5em',
    lineHeight: '4.25',
    letterSpacing: '1.92px'
  },
  '4xl': {
    fontSize: '2em',
    lineHeight: '3.75',
    letterSpacing: '1.2px'
  },
  '3xl': {
    fontSize: '1.875em',
    lineHeight: '2.75em',
    letterSpacing: '0.96px'
  },
  '2xl': {
    fontSize: '1.625em',
    lineHeight: '2.375em',
    letterSpacing: '0.28px'
  },
  'xl': {
    fontSize: '1.375em',
    lineHeight: '2.125em',
    letterSpacing: ''
  },
  'lg': {
    fontSize: '1.25em',
    letterSpacing: '0.04em',
    lineHeight: '1.75em'
  },
  'md': {
    fontSize: '0.75em',
    letterSpacing: '0px',
    lineHeight: '1.5em'
  },
  'sm': {
    fontSize: '0.75em',
    letterSpacing: '0px',
    lineHeight: '1.25em'
  },
  'xs': {
    fontSize: '0.625em',
    letterSpacing: '0px',
    lineHeight: '1em'
  }
}

class Font {
  fontSize: string
  lineHeight: string
  letterSpacing: string
  fontFamily: string
  fontWeight: number
  constructor(size: FontSize, fontFamily: string, fontWeight: number) {
    this.fontSize = FONT_SIZES[size].fontSize
    this.lineHeight = FONT_SIZES[size].lineHeight
    this.letterSpacing = FONT_SIZES[size].letterSpacing

    this.fontFamily = fontFamily
    this.fontWeight = fontWeight
  }
}

const sans6XL = {
  "text-6xl-sans-bold": new Font('6xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-6xl-sans-semibold": new Font('6xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-6xl-sans-medium": new Font('6xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-6xl-sans-regular": new Font('6xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const mono6XL = {
  "text-6xl-mono-bold": new Font('6xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-6xl-mono-semibold": new Font('6xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-6xl-mono-medium": new Font('6xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-6xl-mono-regular": new Font('6xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}

const sans5XL = {
  "text-5xl-sans-bold": new Font('5xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-5xl-sans-semibold": new Font('5xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-5xl-sans-medium": new Font('5xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-5xl-sans-regular": new Font('5xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const mono5XL = {
  "text-5xl-mono-bold": new Font('5xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-5xl-mono-semibold": new Font('5xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-5xl-mono-medium": new Font('5xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-5xl-mono-regular": new Font('5xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}
const sans4XL = {
  "text-4xl-sans-bold": new Font('4xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-4xl-sans-semibold": new Font('4xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-4xl-sans-medium": new Font('4xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-4xl-sans-regular": new Font('4xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const mono4XL = {
  "text-4xl-mono-bold": new Font('4xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-4xl-mono-semibold": new Font('4xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-4xl-mono-medium": new Font('4xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-4xl-mono-regular": new Font('4xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}
const sans3XL = {
  "text-3xl-sans-bold": new Font('3xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-3xl-sans-semibold": new Font('3xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-3xl-sans-medium": new Font('3xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-3xl-sans-regular": new Font('3xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const mono3XL = {
  "text-3xl-mono-bold": new Font('3xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-3xl-mono-semibold": new Font('3xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-3xl-mono-medium": new Font('3xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-3xl-mono-regular": new Font('3xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}
const sans2XL = {
  "text-2xl-sans-bold": new Font('2xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-2xl-sans-semibold": new Font('2xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-2xl-sans-medium": new Font('2xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-2xl-sans-regular": new Font('2xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const mono2XL = {
  "text-2xl-mono-bold": new Font('2xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-2xl-mono-semibold": new Font('2xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-2xl-mono-medium": new Font('2xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-2xl-mono-regular": new Font('2xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}

const sansXL = {
  "text-xl-sans-bold": new Font('xl', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-xl-sans-semibold": new Font('xl', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-xl-sans-medium": new Font('xl', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-xl-sans-regular": new Font('xl', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const monoXL = {
  "text-xl-mono-bold": new Font('xl', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-xl-mono-semibold": new Font('xl', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-xl-mono-medium": new Font('xl', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-xl-mono-regular": new Font('xl', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}
const sansLG = {
  "text-lg-sans-bold": new Font('lg', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-lg-sans-semibold": new Font('lg', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-lg-sans-medium": new Font('lg', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-lg-sans-regular": new Font('lg', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const monoLG = {
  "text-lg-mono-bold": new Font('lg', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-lg-mono-semibold": new Font('lg', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-lg-mono-medium": new Font('lg', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-lg-mono-regular": new Font('lg', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}

const sansMD = {
  "text-md-sans-bold": new Font('md', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-md-sans-semibold": new Font('md', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-md-sans-medium": new Font('md', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-md-sans-regular": new Font('md', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const monoMD = {
  "text-md-mono-bold": new Font('md', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-md-mono-semibold": new Font('md', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-md-mono-medium": new Font('md', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-md-mono-regular": new Font('md', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}

const sansSM = {
  "text-sm-sans-bold": new Font('sm', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-sm-sans-semibold": new Font('sm', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-sm-sans-medium": new Font('sm', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-sm-sans-regular": new Font('sm', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const monoSM = {
  "text-sm-mono-bold": new Font('sm', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-sm-mono-semibold": new Font('sm', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-sm-mono-medium": new Font('sm', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-sm-mono-regular": new Font('sm', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}
const sansXS = {
  "text-xs-sans-bold": new Font('xs', FONT_FAMILY.SANS, FONT_WEIGHT.BOLD),
  "text-xs-sans-semibold": new Font('xs', FONT_FAMILY.SANS, FONT_WEIGHT.SEMI),
  "text-xs-sans-medium": new Font('xs', FONT_FAMILY.SANS, FONT_WEIGHT.MEDIUM),
  "text-xs-sans-regular": new Font('xs', FONT_FAMILY.SANS, FONT_WEIGHT.NORMAL)
}

const monoXS = {
  "text-xs-mono-bold": new Font('xs', FONT_FAMILY.MONO, FONT_WEIGHT.BOLD),
  "text-xs-mono-semibold": new Font('xs', FONT_FAMILY.MONO, FONT_WEIGHT.SEMI),
  "text-xs-mono-medium": new Font('xs', FONT_FAMILY.MONO, FONT_WEIGHT.MEDIUM),
  "text-xs-mono-regular": new Font('xs', FONT_FAMILY.MONO, FONT_WEIGHT.NORMAL)
}

export default {
  ...sans6XL,
  ...mono6XL,
  ...sans5XL,
  ...mono5XL,
  ...sans4XL,
  ...mono4XL,
  ...sans3XL,
  ...mono3XL,
  ...sans2XL,
  ...mono2XL,
  ...sansXL,
  ...monoXL,
  ...sansLG,
  ...monoLG,
  ...sansMD,
  ...monoMD,
  ...sansSM,
  ...monoSM,
  ...sansXS,
  ...monoXS,
}