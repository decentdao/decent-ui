import { ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export declare interface IButton extends ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "base" | "lg" | "sm";
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}