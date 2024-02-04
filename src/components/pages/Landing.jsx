import React from 'react'
import Header from "../header/Header"
import Hero from '../hero/Hero'
import Pros from '../pros/Pros'
import Order from '../order/Order'
import Contacts from '../contacts/Contacts'
import Footer from '../footer/Footer'
import Catalog from '../catalog/Catalog'

const Landing = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Hero />
                <Catalog />
                <Pros />
                <Order />
                <Contacts />
            </div>
            <Footer />
        </>
    );
}

export default Landing;