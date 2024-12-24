import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonPage from './pages/PokemonPage'
import NotFound from './pages/NotFound'

// Components
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/pokemons' element={<PokemonPage />} >
          <Route path="yoav" element={<h1>Yoav Header</h1>}/>
          <Route path=":id" element={<h1>Test Header</h1>}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
)
