import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from './components/Button.jsx'
// import Card from './components/Wrapper.jsx'
// import DisplayCards from './components/Model.jsx'
// import Layout from './components/Layout.jsx'
// import Button4 from './components/Button4.jsx'
// import List from './components/List.jsx'
// import Accordion from './components/Accordion.jsx'
import Box from './components/box'

function App() {

  //2 Model
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };




  return (
    <>
      {
      /* <div>
      <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={count} setCount={setCount}>
          count is {count}
          <h1>{Card}</h1>
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* 1) wrapper component */}
      {/* <div>
        <h1>this is h1</h1>
        <Card>
        <h2>h2 inside card</h2>
        <p>p inside card</p>
        </Card>
        </div> */}

      {/* //2)Modal component  */}

      {/* <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <DisplayCards isOpen={isOpen}>
        <h2>It´s me, Modal!</h2>
        <p>:D</p>
        <button onClick={handleCloseModal}>Close Modal</button>
        </DisplayCards>
      </div> */}

      {/* 3. Layout Component */}
      {/* <div>
        <Layout/>
      </div> */}


      {/* 4. Custom Button with Icon */}
      {/* <Button4/> */}

      {/* 5. Reusable List Component */}
      {/* <List/> */}

      {/* 6. Accordion Component */}
      {/* <Accordion/> */}


      {/* 7) Box style */}
      <div>
      {/* Box com design moderno */}
      <Box backgroundColor="lightblue" design="modern">
        <h1>Modern Styled Box</h1>
        <p>This box has a modern design with clean lines and subtle shadows.</p>
      </Box>

      {/* Box com design vintage */}
      <Box backgroundColor="lightcoral" design="vintage">
        <h1>Vintage Styled Box</h1>
        <p>This box has a vintage design with softer colors and classic fonts.</p>
      </Box>

      {/* Box com design padrão (moderno) */}
      <Box >
        <h1>Default Styled Box</h1>
        <p>This box uses the default modern style.</p>
      </Box>
    </div>

    </>
  )
}

export default App
