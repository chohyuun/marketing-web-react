import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../style/DefaultLayout'
import Home from '../views/Home'
import React from 'react'
import ProductDetail from '../views/ProductDetail'

const RootRoutes = () => {
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

export default RootRoutes
