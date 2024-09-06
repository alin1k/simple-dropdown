import { useContext } from "react"
import { DropdownContext } from "../Dropdown"

export function DropdownButton({children, clickEvent} : {children: string, clickEvent: ()=>any}) {

  const {setIsOpen} = useContext(DropdownContext);

  return (
    <button
      className="block w-full px-7 py-2 text-sm hover:bg-gray-100 focus:outline-none"
      onClick={() => {
        setIsOpen(false);
        clickEvent();
      }}
    >
      {children}
    </button>
  )
}
