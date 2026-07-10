import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addboats from './compoents/Addboats'
import Searchboat from './compoents/Searchboat'
import Deleteboats from './compoents/Deleteboats'
import Viewboat from './compoents/Viewboat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Addboats />} />
      <Route path="/search" element={<Searchboat />} />
      <Route path="/delete" element={<Deleteboats />} />
      <Route path="/view" element={<Viewboat/>} />

      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
