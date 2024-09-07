import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from "../index"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.examples}>
      <div className={`${styles.section1} ${styles.section}`}> 
        <Dropdown>
          <DropdownLabel>Click me!</DropdownLabel>
          <DropdownMenu>
            <DropdownButton>Button 1</DropdownButton>
            <DropdownButton>Button 2</DropdownButton>
            <DropdownButton>Button 3</DropdownButton>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className={`${styles.section}`}> 
        <Dropdown>
          <DropdownLabel>Click me!</DropdownLabel>
          <DropdownMenu>
            <DropdownButton>Button 1</DropdownButton>
            <DropdownButton>Button 2</DropdownButton>
            <DropdownButton>Button 3</DropdownButton>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className={`${styles.section} ${styles.section2}`}> 
        <Dropdown>
          <DropdownLabel>Click me!</DropdownLabel>
          <DropdownMenu>
            <DropdownButton>Button 1</DropdownButton>
            <DropdownButton>Button 2</DropdownButton>
            <DropdownButton>Button 3</DropdownButton>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className={`${styles.section} ${styles.section3}`}> 
        <Dropdown>
          <DropdownLabel>Click me!</DropdownLabel>
          <DropdownMenu>
            <DropdownButton>Button 1</DropdownButton>
            <DropdownButton>Button 2</DropdownButton>
            <DropdownButton>Button 3</DropdownButton>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className={`${styles.section} ${styles.section4}`}> 
        <Dropdown>
          <DropdownLabel>Click me!</DropdownLabel>
          <DropdownMenu>
            <DropdownButton>Button 1</DropdownButton>
            <DropdownButton>Button 2</DropdownButton>
            <DropdownButton>Button 3</DropdownButton>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export default App