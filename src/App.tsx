import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ResumePaper from './views/ResumePaper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<ResumePaper />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
