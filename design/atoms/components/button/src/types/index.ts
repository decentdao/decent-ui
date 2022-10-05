import { ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface IButton extends ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "base" | "lg" | "sm";
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}