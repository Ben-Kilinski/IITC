import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  function fetchJoker () {
    const res = awaitaxios.get('http://localhost:3000/api/v1/jokes/random')
  }
  return (
    <>
     <div></div>
     <button on click={fetchJoker}>Get Random Joke</button>
    </>
  )
}

export default App
