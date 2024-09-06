import { useContext } from "react"
import { DropdownContext } from "./Dropdown"

export default function DropdownMenu({children} : {children: React.ReactNode}) {

  const {isOpen, dropdownRef} = useContext(DropdownContext)

  return isOpen && (
    <div
      ref={dropdownRef}
      className="absolute left-0 mt-1 w-32 rounded-md shadow-lg bg-white border z-10"
    >
      {children}
    </div>
  )
}

