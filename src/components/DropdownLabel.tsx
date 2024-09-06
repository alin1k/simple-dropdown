import { useContext } from "react"
import { DropdownContext } from "./Dropdown"

export default function DropdownLabel({children} : {children: string}) {

  const {buttonRef, toggleDropdown} = useContext(DropdownContext)

  return (
    <button
      ref={buttonRef}
      onClick={toggleDropdown}
      className="p-1 px-2 bg-white border rounded-md hover:bg-gray-100 focus:outline-none"
    >
      {children}
    </button>
  )
}

