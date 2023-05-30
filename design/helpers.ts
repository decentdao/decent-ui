import typography from './tokens/design-tokens--text.json'
import colorPalette from './tokens/design-tokens--color.json'


function addPx(str: string) {
  return str + 'px'
}

export function parseColors(colorFigmaTokens: any) {
  // captures color catagory names to create object key
  const colorCatogoryNames = Object.keys(colorFigmaTokens);

  return Object.values(colorFigmaTokens).flatMap((tokens, index) => {
    const colorObj = Object.entries(tokens!).reduce((prev, [name, data]) => ({ ...prev, [name]: data.value }), {})
    return { [colorCatogoryNames[index].toLowerCase()]: colorObj }
  }).reduce((prev, cur) => {
    return { ...prev, ...cur }
  }, {})
}

export function parseTypography(font: any) {
  return Object.entries(font).reduce((prev: any, [textStyle, styleWeights]) => {
    const colorTokens: any = { ...prev }
    Object.entries(styleWeights as any).map(([weightName, properties]) => {
      const { fontSize, fontFamily, fontWeight, letterSpacing, lineHeight } = (properties as any).value
      colorTokens[`${textStyle}-${weightName}`] = {
        fontSize: addPx(fontSize),
        fontFamily,
        fontWeight,
        letterSpacing: addPx(letterSpacing),
        lineHeight: addPx(lineHeight)
      }
    })
    return colorTokens;
  }, {})
}

export function parsedTypographyV1() {
  let parsedStyles = {} as any;
  Object.entries(typography.font).map(([_, styles]) => {
    Object.entries(styles).map(([styleName, properties]) => {
      const { fontSize, fontFamily, fontWeight, letterSpacing, lineHeight } = properties.value
      parsedStyles = {
        ...parsedStyles,
        [styleName]: {
          fontSize: addPx(fontSize.toString()),
          fontFamily,
          fontWeight,
          letterSpacing: addPx(letterSpacing.toString()),
          lineHeight: addPx(lineHeight.toString())
        }
      }
    })
  })
  return parsedStyles
}

export function parseColorsV1(colorFigmaTokens: any) {
  const colorMapping = Object.entries(colorFigmaTokens).map(([baseName, colorData]: [string, any]) => {
    const colorsData = Object.entries(colorData).map(([colorBaseName, colorShades]: [string, any]) => {
      const shades = Object.entries(colorShades).map(([shadeName, colorValues]: [string, any]) => {
        // { 100: { value: '#ffffff' }
        return { [shadeName]: colorValues.value }
      })
      // { grayscale: { 100: '#ffffff', 200: '#f2f2f2', .. } }
      return { [colorBaseName]: Object.assign({}, ...shades) }
    })
    // { neutral: { grayscale: { 100: '#ffffff', 200: '#f2f2f2', .. } }
    return { [baseName]: Object.assign({}, ...colorsData) }
  })
  return colorMapping.reduce((prev, cur) => ({ ...prev, ...cur }), {})
}

export function parsedColorsV1() {
  const { color, gradient } = colorPalette;
  const colors = parseColorsV1(color);
  const gradients = parseColorsV1(gradient);
  
  return { ...colors, ...gradients }
}