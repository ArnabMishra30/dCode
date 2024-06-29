import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllBlog from './AllBlog'


function Blog() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <AllBlog />
      </div>
      <Footer />
    </>
  )
}

export default Blog