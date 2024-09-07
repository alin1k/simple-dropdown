import { useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownLabel.module.css"

import { IDropdownLabel } from "src/types/types"

export function DropdownLabel(
  {
    children,
    className,
    variant = "light",
    size = "sm"
  } : IDropdownLabel) {

  const {buttonRef, toggleDropdown} = useContext(DropdownContext)

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

