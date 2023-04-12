import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import React from 'react'
import DefaultLayout from './style/DefaultLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
