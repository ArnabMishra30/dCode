import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllMembers from '../components/AllMembers'

function AllMember() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <AllMembers />
            </div>
            <Footer />
        </>
    )
}

export default AllMember