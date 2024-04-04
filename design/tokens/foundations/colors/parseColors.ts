import tokenData from "../../design-tokens.tokens.json"

const { color } = tokenData
const colors = color.color

export const parseColorsV1 = () => {
  const colorKeyValuePairs = Object.entries(colors).map(([baseName, colorData]: [string, any]) => {
    const colorsData = Object.entries(colorData).map(
      ([colorBaseName, colorShades]: [string, any]) => {
        if (!colorShades.value) {
          const deeperColorShadres = Object.entries(colorShades).map(
            ([deeperColorBaseName, deeperColorShades]: [string, any]) => {
              if (!deeperColorShades.value) {
                const deeperDeeperColorShades = Object.entries(deeperColorShades).map(
                  ([deeperDeeperColorBaseName, deeperDeeperColorShades]: [string, any]) => {
                    return {
                      [`${baseName}-${colorBaseName}-${deeperColorBaseName}-${deeperDeeperColorBaseName}`]:
                        deeperDeeperColorShades.value,
                    }
                  }
                )
                return Object.assign({}, ...deeperDeeperColorShades.flat())
              }
              return {
                [`${baseName}-${colorBaseName}-${deeperColorBaseName}`]: deeperColorShades.value,
              }
            }
          )
          return Object.assign({}, ...deeperColorShadres.flat())
        }

        return {
          [`${baseName}-${colorBaseName}`]: colorShades.value,
        }
      }
    )
    return colorsData
  })
  return Object.assign({}, ...colorKeyValuePairs.flat())
}
