import { useContext } from "react"
import { DropdownContext, DropdownThemeContext } from "../Dropdown"
import styles from "./DropdownLabel.module.css"

import { IDropdownLabel } from "src/types/types"

export function DropdownLabel(
  {
    children,
    className,
    variant,
    size
  } : IDropdownLabel) {

  const {buttonRef, toggleDropdown} = useContext(DropdownContext);
  const dropdownTheme = useContext(DropdownThemeContext);

  variant = variant ?? dropdownTheme.variant;
  size = size ?? dropdownTheme.size;

  return (
    <button
      ref={buttonRef}
      onClick={toggleDropdown}
      className={`${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  )
}

