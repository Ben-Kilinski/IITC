import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from './components/Button.jsx'
// import Card from './components/Wrapper.jsx'
// import DisplayCards from './components/Model.jsx'
import Layout from './components/Layout.jsx'

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
      <div>
        <Layout/>
      </div>

    </>
  )
}

export default App
