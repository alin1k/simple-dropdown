import { createContext, useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownMenu.module.css";
import { IDropdownMenu } from "src/types/types";

export const DropdownMenuTheme = createContext<{variant: string, size: string}>({variant: '', size: ''});

export function DropdownMenu(
  {
    children,
    className,
    variant="light",
    size="sm"
  } : IDropdownMenu) {

  const {isOpen, dropdownRef} = useContext(DropdownContext)

  return isOpen && (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownMenu} ${styles[variant]} ${styles[size]} ${className}`}
    >
      <DropdownMenuTheme.Provider value={{variant, size}}>
        {children}
      </DropdownMenuTheme.Provider>
    </div>
  )
}

