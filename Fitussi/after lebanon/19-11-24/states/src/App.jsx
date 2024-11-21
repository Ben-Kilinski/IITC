import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  
  function imputMirror() {

    const [text, setText] = useState('');
    const handleChange = (e) => { setText(e.target.value) }

    <input value={text} onChange={handleChange} states />

  }
  

  return (
    <>
      <div>
          <input type="text" onChange={handleChange}/>
          <p>Echo: ...{text}</p>
      </div>
    </>
  )

}

export default App
