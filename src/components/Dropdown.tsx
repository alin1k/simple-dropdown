import "../index.css"

import { useState, useRef, createContext } from 'react';
import {useClickOutsideHandler} from '../hooks';

export const DropdownContext = createContext<any>(null);

export default function DropdownMenu({children} : {children: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen})

  return (
    <DropdownContext.Provider value={{isOpen, setIsOpen, dropdownRef, buttonRef, toggleDropdown}}>
      <div className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}