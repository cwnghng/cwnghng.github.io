import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ResumePaper from './views/ResumePaper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<ResumePaper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
