import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route path="*" element={<Home />} />
    </Router>
  )
}

export default App
