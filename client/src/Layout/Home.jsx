import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Members from '../components/Members'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Members />
            <div id='about'>
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Home