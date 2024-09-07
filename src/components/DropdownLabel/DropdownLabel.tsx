import { useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownLabel.module.css"

export function DropdownLabel({children} : {children: string}) {

  const {buttonRef, toggleDropdown} = useContext(DropdownContext)

  return (
    <button
      ref={buttonRef}
      onClick={toggleDropdown}
      className={styles.dropdownLabel}
    >
      {children}
    </button>
  )
}

