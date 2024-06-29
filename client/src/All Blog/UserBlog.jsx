// UserBlog.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyBlog from './MyBlog'

function UserBlog() {
    return (
        <>
            <Navbar />
            <MyBlog />
            <Footer />
        </>
    );
}

export default UserBlog;
