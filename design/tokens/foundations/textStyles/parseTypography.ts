import tokenData from "../../design-tokens.tokens.json"
const { typography } = tokenData

// Interfaces as previously defined
interface TypographyProperty {
  type: string;
  value: string | number;
}

interface ITypographyToken {
  fontSize: TypographyProperty;
  textDecoration?: TypographyProperty;
  fontFamily: TypographyProperty;
  fontWeight: TypographyProperty;
  lineHeight?: TypographyProperty;
  fontStyle?: TypographyProperty;
  letterSpacing?: TypographyProperty;
  textCase?: TypographyProperty;
  textTransform?: TypographyProperty;
  description?: string;
  type?: "typography";
  extensions?: {
    [key: string]: any;
  };
}

interface TypographyGroup {
  [key: string]: ITypographyToken | TypographyGroup;
}

function isTypographyToken(value: ITypographyToken | TypographyGroup): value is ITypographyToken {
  return (value as ITypographyToken).fontSize !== undefined;
}

const addPxIfNeeded = (value: string | number) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

const parseTypography = (typographyData: TypographyGroup): Record<string, any> => {
  let parsedTypography: Record<string, any> = {};

  const parseToken = (token: ITypographyToken) => {
    return {
      fontSize: addPxIfNeeded(token.fontSize.value),
      fontFamily: token.fontFamily.value,
      fontWeight: token.fontWeight.value,
      letterSpacing: token.letterSpacing ? addPxIfNeeded(token.letterSpacing.value) : undefined,
      lineHeight: token.lineHeight ? addPxIfNeeded(token.lineHeight.value) : undefined,
    };
  };

  const extractValues = (group: TypographyGroup | ITypographyToken, prefix = '') => {
    Object.entries(group).forEach(([key, value]) => {
      const path = prefix ? `${prefix}-${key}` : key;

      if (isTypographyToken(value)) {
        // Directly parse and assign typography tokens
        parsedTypography[path] = parseToken(value);
      } else {
        // Recursively handle nested groups
        extractValues(value, path);
      }
    });
  };

  extractValues(typographyData);
  return parsedTypography;
};

export const parseTypographyTokens = (): Record<string, any> => {
  return parseTypography(typography.typography as TypographyGroup);
};
