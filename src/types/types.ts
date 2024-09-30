export type variantType = "light" | "dark";
export type sizeType = "sm" | "md" | "xl";

export interface IDropdownLabel{
  children?: string,
  className?: string,
  variant?: "light" | "dark",
  size?: "sm" | "md" | "xl",
}

export interface IDropdownMenu{
  children?: React.ReactNode,
  className?: string,
  variant?: "light" | "dark",
  size?: "sm" | "md" | "xl",
}

export interface IDropdown{
  children?: React.ReactNode,
  className?: string,
  variant?: "light" | "dark",
  size?: "sm" | "md" | "xl",
}