export type variantType = "light" | "dark";
export type sizeType = "sm" | "md" | "xl";

export interface IDropdownLabel{
  children?: string,
  className?: string,
  variant?: variantType,
  size?: sizeType
}

export interface IDropdownMenu{
  children?: React.ReactNode,
  className?: string,
  variant?: variantType,
  size?: sizeType
}

export interface IDropdown{
  children?: React.ReactNode,
  className?: string,
  variant?: variantType,
  size?: sizeType,
  showOnHover? : boolean
}