import { InputProps } from "@chakra-ui/react"

export enum RestrictCharTypes {
  WHOLE_NUMBERS_ONLY,
  FLOAT_NUMBERS,
}

export interface IInput extends InputProps {
  size: 'base' | 'xl';
  leftElement?: JSX.Element;
  rightElement?: JSX.Element | string;
  rightElementAction?: () => void;
  decimals?: number;
  restrictChars?: RestrictCharTypes;
}