import React, { useState, useEffect } from 'react';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../redux/store';

function Navbar() {
    //global state
    let isLogin = useSelector((state) => state.isLogin);
    // isLogin = isLogin || localStorage.getItem("userId")
    const dispatch = useDispatch();
    console.log(isLogin);

    // Use useNavigate hook to get the navigation function
    const navigate = useNavigate();

    // Retrieve login state from localStorage on component mount
    useEffect(() => {
        const storedLoginState = localStorage.getItem('isLogin');
        if (storedLoginState) {
            dispatch(authActions.login());
        }
    }, [dispatch]);

    //handle logout function
    const handleLogout = () => {
        try {
            dispatch(authActions.logout())
            alert('Logout Sucessfully..')
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky
                ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
                : ""
                }`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/" >Home</Link></li>
                                {/* <li><Link to="/about">About-Us</Link></li> */}
                                <li><button onClick={handleAboutClick}>About-Us</button></li>
                                {/* <li><Link to="/contact">Contact-Us</Link></li> */}
                                <li><button onClick={handleContactClick}>Contact-Us</button></li>
                                {isLogin && (
                                    <>
                                        <li><Link to="/members">Members</Link></li>
                                        <li><Link to="/blogs">Blogs</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <Link className=" text-2xl font-bold cursor-pointer" to="/">dCodeIT</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/about">About-Us</Link></li> */}
                            <li><button onClick={handleAboutClick}>About-Us</button></li>
                            {/* <li><Link to="/contact">Contact-Us</Link></li> */}
                            <li><button onClick={handleContactClick}>Contact-Us</button></li>
                            {isLogin && (
                                <>
                                    <li><Link to="/members">Members</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                    {!isLogin && (
                        <div className="navbar-end">
                            <button className="btn bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").showModal()}
                            >Log In</button>
                            <Login />
                        </div>
                    )}
                    {isLogin && (
                        <div className="navbar-end">
                            <button onClick={handleLogout} className="btn bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                            >Log Out</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar;
