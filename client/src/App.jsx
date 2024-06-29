import { useState } from 'react'
import Home from './Layout/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import AllMember from './Members/AllMember'
import Register from './components/Register'
import Blog from './All Blog/Blog'
import { useSelector } from 'react-redux';
import UserBlog from './All Blog/UserBlog'
import CreateBlog from './components/CreateBlog'
import AllBlog from './All Blog/AllBlog'
import BlogDetails from './components/BlogDetails'

function App() {

  const isLogin = useSelector((state) => state.isLogin);

  return (
    <>
      {/* <Home />
      <AllMembers /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/members" element={<AllMember />} /> */}
        {isLogin ? (
          <Route path="/members" element={<AllMember />} />
        ) : (
          <Route path="/members" element={<Navigate to="/" replace />} />
        )}

        {/* <Route path="/blogs" element={<Blog />} /> */}
        {isLogin ? (
          <Route path="/blogs" element={<Blog />} />
        ) : (
          <Route path="/blogs" element={<Navigate to="/" replace />} />
        )}

        {/* <Route path="/my-blog" element={<UserBlog />} /> */}
        {isLogin ? (
          <Route path="/my-blog" element={<UserBlog />} />
        ) : (
          <Route path="/my-blog" element={<Navigate to="/" replace />} />
        )}

        {/* createBlog route */}
        {isLogin ? (
          <Route path="/create-blog" element={<CreateBlog />} />
        ) : (
          <Route path="/create-blog" element={<Navigate to="/" replace />} />
        )}

        {/* configure my-blog */}
        {/* createBlog route */}
        {isLogin ? (
          <Route path="/all-blogs" element={<AllBlog />} />
        ) : (
          <Route path="/all-blogs" element={<Navigate to="/" replace />} />
        )}

        {isLogin ? (
          <Route path="/blog-details/:id" element={<BlogDetails />} />
        ) : (
          <Route path="/blog-details/:id" element={<Navigate to="/" replace />} />
        )}

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
