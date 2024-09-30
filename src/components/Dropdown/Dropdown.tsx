import { useState, useRef, createContext } from 'react';
import {useClickOutsideHandler} from '../../hooks';
import styles from "./Dropdown.module.css"
import { IDropdown, sizeType, variantType } from 'src/types/types';

export const DropdownContext = createContext<any>(null);
export const DropdownThemeContext = createContext<{variant: variantType, size: sizeType}>({variant: 'light', size: 'sm'})

export function Dropdown(
  {
    children,
    className,
    variant="light",
    size="sm"
  } : IDropdown) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen})

  return (
    <DropdownContext.Provider value={{isOpen, setIsOpen, dropdownRef, buttonRef, toggleDropdown}}>
      <DropdownThemeContext.Provider value={{variant, size}}>
        <div className={`${styles.dropdown} ${className}`}>
          {children}
        </div>
      </DropdownThemeContext.Provider>
    </DropdownContext.Provider>
  );
}