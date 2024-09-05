import "../index.css"

import { useState, useRef } from 'react';
import {useClickOutsideHandler} from '../hooks';

export default function DropdownMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen})

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-1 px-2 bg-white border rounded-md hover:bg-gray-100 focus:outline-none"
      >
        Click me!
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-1 w-32 rounded-md shadow-lg bg-white border z-10"
        >
          <div className="">
            <button
              className="block w-full px-7 py-2 text-sm hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Button 1
            </button>
            <button
              className="block w-full px-7 py-2 text-sm hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Button 2
            </button>
          </div>
        </div>
      )}
    </div>
  );
}