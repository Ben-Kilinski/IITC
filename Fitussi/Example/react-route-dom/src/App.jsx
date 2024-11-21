import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"
import Articles from "./Pages/Articles/Articles.jsx"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Adashboard" element={<Dashboard />} />
          <Route path="/Articles" element={<Articles />} >
            <Route path="News" element={<h2>This is News Section</h2>} />
            <Route path="Politics" element={<h2>This is Politics Section</h2>} />
            <Route path="Tech" element={<h2>This is Tech Section</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
onabort