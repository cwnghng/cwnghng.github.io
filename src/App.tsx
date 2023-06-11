import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumePaper from './views/ResumePaper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<ResumePaper />} />
        <Route path="/" element={<ResumePaper />} />
        <Route path="*" element={<ResumePaper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
