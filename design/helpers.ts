export function parseColors(colorFigmaTokens: any) {
  // captures color catagory names to create object key
  const colorCatogoryNames = Object.keys(colorFigmaTokens);

  return Object.values(colorFigmaTokens).flatMap((tokens, index) => {
    const colorObj = Object.entries(tokens!).reduce((prev, cur) => {

      // spilts token color and number value gold-500
      const [colorName, potentialNumber] = cur[0].split("-")

      // spilt fails its assumed that this is a base color, ie white: {value: #FFF}
      if (!potentialNumber) {
        // this spilt checks for selectors (active, disabled, hover, etc)
        const [baseName, selector] = cur[0].split(':')

        // if selector exists create key using number and selector (white-active)
        if (selector) {
          return { ...prev, [`${baseName.toLowerCase().trim()}-${selector.trim()}`]: cur[1].value }
        }
        return { ...prev, [colorName.toLowerCase()]: cur[1].value }
      }

      // this spilt checks for selectors (active, disabled, hover, etc)
      const [colorNumber, selector] = potentialNumber.split(':')

      // if selector exists create key using number and selector (500-active)
      if (selector) {
        return { ...prev, [`${colorNumber}-${selector.trim()}`]: cur[1].value }
      }

      // returns previous object combined with new color key and value
      return { ...prev, [colorNumber]: cur[1].value }
    }, {})
    return { [colorCatogoryNames[index].toLowerCase()]: colorObj }
  }).reduce((prev, cur) => {
    return { ...prev, ...cur }
  }, {})
}