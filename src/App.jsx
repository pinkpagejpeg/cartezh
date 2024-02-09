import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.scss'
import Landing from './components/pages/Landing'
import NotFound from './components/pages/NotFound'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/sitemap.xml" element={<Navigate to="../sitemap.xml" />} />
          <Route exact path="/robots.txt" element={<Navigate to="../robots.txt" />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </div>
  )
}

export default App
