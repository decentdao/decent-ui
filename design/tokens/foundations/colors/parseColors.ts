import tokenData from "../../design-tokens.tokens.json"

const { color } = tokenData
const colors = color.color

interface DesignToken {
  description: string;
  type: string;
  value: string;
  blendMode: string;
  extensions: {
    [key: string]: {
      styleId: string;
      exportKey: string;
    };
  };
}

interface ColorGroup {
  [key: string]: DesignToken | ColorGroup; // A group can contain both tokens and other groups
}

interface ColorTokenFile {
  color: {
    color: ColorGroup;
  };
}

// Function to check if a value is a DesignToken
function isDesignToken(value: DesignToken | ColorGroup): value is DesignToken {
  return (value as DesignToken).value !== undefined;
}

const parseNestedColorData = (colorData: ColorGroup, currentPath: string = ''): Record<string, string> => {
  let parsedColors: Record<string, string> = {};

  Object.entries(colorData).forEach(([key, value]) => {
    const newPath = currentPath ? `${currentPath}-${key}` : key;

    // Use the type guard to check if the current value is a DesignToken
    if (isDesignToken(value)) {
      parsedColors[newPath] = value.value;
    } else {
      // It's safe to cast to ColorGroup since we know it's not a DesignToken
      Object.assign(parsedColors, parseNestedColorData(value as ColorGroup, newPath));
    }
  });

  return parsedColors;
};

export const parseColorTokens = (): Record<string, string> => {
  return parseNestedColorData(colors);
};
