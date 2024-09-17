
# simple-dropdown

<div>
  <img src='https://img.shields.io/npm/v/alin-simple-dropdown'>
  <img src='https://img.shields.io/badge/License-MIT-green.svg'>
  <img src='https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square'>
</div>


simple-dropdown is a React component library that offers a simple Dropdown menu.

> [!IMPORTANT]
> Documentation is currently being worked on.

## Installation

Install the library using npm

``` bash
npm install alin-simple-dropdown
```
    
## Usage/Examples

```javascript
import { Dropdown, DropdownLabel, DropdownMenu, DropdownButton } from 'alin-simple-dropdown'

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
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/alin1k/simple-dropdown.git
```

Go to the project directory

```bash
  cd simple-dropdown
```

Install dependencies

```bash
  npm install
```

Start Storybook

```bash
  npm run storybook
```

Edit `src/App.tsx` to see the changes



## Contributing

Contributions are always welcome!

Please adhere to this project's [`code of conduct`](https://github.com/alin1k/simple-dropdown?tab=coc-ov-file).

`CONTRIBUTING.md` coming soon.

