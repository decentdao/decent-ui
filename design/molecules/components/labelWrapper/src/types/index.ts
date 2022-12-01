import { ReactNode } from "react";

export declare interface ILabelWrapper {
  label?: string;
  subLabel?: ReactNode;
  isDisabled?: boolean;
  errorMessage?: string;
  tooltipContent?: JSX.Element;
  htmlFor?: string;
  children: JSX.Element;
}