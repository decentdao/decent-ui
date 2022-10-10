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