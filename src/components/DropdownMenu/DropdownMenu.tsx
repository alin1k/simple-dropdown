import { createContext, useContext } from "react"
import { DropdownContext, DropdownThemeContext } from "../Dropdown"
import styles from "./DropdownMenu.module.css";
import { IDropdownMenu, sizeType, variantType } from "src/types/types";

export const DropdownMenuTheme = createContext<{variant: variantType, size: sizeType}>({variant: 'light', size: 'sm'});

export function DropdownMenu(
  {
    children,
    className,
    variant,
    size
  } : IDropdownMenu) {

  const {isOpen, setIsOpen, dropdownRef, showOnHover} = useContext(DropdownContext);
  const dropdownTheme = useContext(DropdownThemeContext);

  variant = variant ?? dropdownTheme.variant;
  size = size ?? dropdownTheme.size;

  return isOpen && (
    <DropdownMenuTheme.Provider value={{variant, size}}>
      <div
      ref={dropdownRef}
      className={`${styles.dropdownMenu} ${styles[variant]} ${styles[size]} ${className}`}
      onMouseLeave={()=>{
        if(showOnHover){
          setIsOpen(false);
        }
      }}
      >
        {children}
      </div>
    </DropdownMenuTheme.Provider>
  )
}

