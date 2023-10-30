import React from 'react'

// import Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Pages
import Homepage from './pages/Homepage'
import About from './pages/AboutMe'
import TryOn from './pages/TryOn'
import Tutorial from './pages/Tutorial'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/about-me' element={<About />} />
        <Route exact path='/try-on' element={<TryOn />} />
        <Route exact path='/tutorial' element={<Tutorial />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
