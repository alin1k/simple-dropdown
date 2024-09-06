import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from "./index"

function App() {
  return (
    <Dropdown>
      <DropdownLabel>Click me!</DropdownLabel>
      <DropdownMenu>
        <DropdownButton clickEvent={()=>console.log("first button")}>Button 1</DropdownButton>
        <DropdownButton clickEvent={()=>console.log("second button")}>Button 2</DropdownButton>
        <DropdownButton clickEvent={()=>console.log("third button")}>Button 3</DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
}

export default App