import { useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownMenu.module.css";

export function DropdownMenu({children} : {children: React.ReactNode}) {

  const {isOpen, dropdownRef} = useContext(DropdownContext)

  return isOpen && (
    <div
      ref={dropdownRef}
      // className="absolute left-0 mt-1 w-32 rounded-md shadow-lg bg-white border z-10"
      className={styles.dropdownMenu}
    >
      {children}
    </div>
  )
}

