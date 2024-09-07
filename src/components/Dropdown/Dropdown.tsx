import { useState, useRef, createContext } from 'react';
import {useClickOutsideHandler} from '../../hooks';
import styles from "./Dropdown.module.css"

export const DropdownContext = createContext<any>(null);

export function Dropdown({children} : {children: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen})

  return (
    <DropdownContext.Provider value={{isOpen, setIsOpen, dropdownRef, buttonRef, toggleDropdown}}>
      <div className={styles.dropdown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}