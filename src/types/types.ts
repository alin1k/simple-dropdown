import { CSSProperties } from "react";

export interface IDropdownLabel{
  children?: string,
  className?: string,
  variant?: "light" | "dark";
  size?: "sm" | "md" | "xl";
}