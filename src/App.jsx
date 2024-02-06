import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.scss'
import Landing from './components/pages/Landing'
import NotFound from './components/pages/NotFound'

function App() {

  return (
    <div className="App">
      <SpeedInsights />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
