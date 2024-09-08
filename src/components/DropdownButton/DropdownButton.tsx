import { useContext } from "react"
import { DropdownContext } from "../Dropdown"
import styles from "./DropdownButton.module.css"
import { DropdownMenuTheme } from "../DropdownMenu";

export function DropdownButton({children, className, clickEvent} : {children: string, className?: string, clickEvent?: ()=>any }) {

  const {setIsOpen} = useContext(DropdownContext);

  const theme = useContext(DropdownMenuTheme);

  const handleClick = clickEvent ?? (() => {});

  return (
    <button
      className={`${styles.dropdownButton} ${styles[theme.variant]} ${styles[theme.size]} ${className}`}
      onClick={() => {
        setIsOpen(false);
        handleClick();
      }}
    >
      {children}
    </button>
  )
}
