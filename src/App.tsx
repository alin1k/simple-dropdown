import DropdownLabel from './components/DropdownLabel'
import Dropdown from './components/Dropdown'
import DropdownMenu from './components/DropdownMenu'
import DropdownButton from './components/DropdownButton'

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