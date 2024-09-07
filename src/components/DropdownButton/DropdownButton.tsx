import { useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownButton.module.css"

export function DropdownButton({children, clickEvent} : {children: string, clickEvent?: ()=>any }) {

  const {setIsOpen} = useContext(DropdownContext);

  const handleClick = clickEvent ?? (() => {});

  return (
    <button
      // className="block w-full px-7 py-2 text-sm hover:bg-gray-100 focus:outline-none"
      className={styles.dropdownButton}
      onClick={() => {
        setIsOpen(false);
        handleClick();
      }}
    >
      {children}
    </button>
  )
}
