import { InputProps } from "@chakra-ui/react"
import { ReactNode } from "react";

export declare interface IInput extends InputProps {
  size?: 'base';
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  rightAddonAction?: () => void;
}