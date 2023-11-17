import React from 'react'
import './styles/App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Pros from './components/pros/Pros'
import Order from './components/order/Order'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Hero/>
        <Pros/>
        <Order/>
      </div>
    </div>
  )
}

export default App
