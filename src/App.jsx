import React from 'react'
import './styles/App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Pros from './components/pros/Pros'
import Order from './components/order/Order'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Catalog from './components/catalog/Catalog'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Catalog />
        <Pros />
        <Order />
        <Contacts />
      </div>
      <Footer />
    </div>
  )
}

export default App
