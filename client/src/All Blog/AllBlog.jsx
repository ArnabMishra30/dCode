// import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
// import BlogCard from '../components/BlogCard'
// import axios from 'axios';

// function AllBlog() {

//     const [blogs, setBlogs] = useState([])
//     const [loading, setLoading] = useState(true);//test
//     const [error, setError] = useState(null);//test

//     //get all blogs
//     // AllBlog component
//     const getAllBlogs = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/api/v1/blog/all-blogs');
//             console.log('Response:', response.data);
//             if (response.data?.success) { // Corrected the variable name to 'success'
//                 setBlogs(response.data?.blogs);
//             }
//             setLoading(false);
//         } catch (error) {
//             console.log('Error:', error);
//             setError(error.message);
//             setLoading(false);
//         }
//     }

//     // Render condition in AllBlog component
//     if (!loading && blogs.length === 0) {
//         return <div>No blogs found.</div>;
//     }

//     useEffect(() => {
//         getAllBlogs();
//     }, [])

//     if (loading) {
//         return <div>Loading...</div>; // Display loading indicator while fetching data
//     }

//     if (error) {
//         return <div>Error: {error}</div>; // Display error message if there's an error
//     }

//     return (
//         <>
//             <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-9'>
//                 <div className="mt-28 items-center justify-center text-center">
//                     <h1 className="text-2xl  md:text-4xl">
//                         Dive into Our Coding Club  {" "} <br /><br />
//                         <span className="text-pink-500"> Blogs! :)</span>
//                     </h1>
//                     <p className="mt-12">
//                         Welcome to our coding club's blog page! Here, you'll embark on a journey through the diverse minds and experiences of our passionate members, all united by a common love for coding and technology. From seasoned veterans to eager newcomers, our club embraces diversity and inclusivity, fostering an environment where everyone's voice is heard and valued. Join us as we explore the latest trends, share insights, and celebrate the unique talents and perspectives that enrich our coding community.
//                     </p>
//                     <div>
//                         <Link to="/create-blog">
//                             <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//                                 Add Blog ++
//                             </button>
//                         </Link>
//                         <Link to="/my-blog">
//                             <button className="mt-6 ml-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-primary hover:text-black duration-300">
//                                 My Blogs
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//                 {blogs.length > 0 ? (
//                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//                         {blogs.map((blog) => (
//                             <BlogCard
//                                 key={blog._id}
//                                 id={blog._id}
//                                 title={blog.title}
//                                 description={blog.description}
//                                 imageUrl={blog.image}
//                                 fullname={blog.user.fullName}
//                                 time={blog.createdAt}
//                             />
//                         ))}
//                     </div>
//                 ) : (
//                     <div>No blogs found.</div> // Display message if there are no blogs
//                 )}
//             </div>
//         </>
//     )
// }

// export default AllBlog


// {/* {blogData.map(blog => (
//                         <BlogCard
//                             key={blog.title}
//                             title={blog.title}
//                             description={blog.description}
//                             imageUrl={blog.image_url}
//                         />
//                     ))} */}


import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BlogCard from '../components/BlogCard';
import axios from 'axios';

function AllBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/v1/blog/all-blogs');
            console.log('Response:', response.data);
            if (response.data?.success) {
                setBlogs(response.data?.blogs);
            }
        } catch (error) {
            console.log('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-9'>
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl  md:text-4xl">
                    Dive into Our Coding Club  {" "} <br /><br />
                    <span className="text-pink-500"> Blogs! :)</span>
                </h1>
                <p className="mt-12">
                    Welcome to our coding club's blog page! Here, you'll embark on a journey through the diverse minds and experiences of our passionate members, all united by a common love for coding and technology. From seasoned veterans to eager newcomers, our club embraces diversity and inclusivity, fostering an environment where everyone's voice is heard and valued. Join us as we explore the latest trends, share insights, and celebrate the unique talents and perspectives that enrich our coding community.
                </p>
                <div>
                    <Link to="/create-blog">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Add Blog ++
                        </button>
                    </Link>
                    <Link to="/my-blog">
                        <button className="mt-6 ml-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-primary hover:text-black duration-300">
                            My Blogs
                        </button>
                    </Link>
                </div>
            </div>
            {blogs.length > 0 ? (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog._id}
                            id={blog._id}
                            title={blog.title}
                            description={blog.description}
                            imageUrl={blog.image}
                            fullname={blog.user.fullName}
                            time={blog.createdAt}
                        />
                    ))}
                </div>
            ) : (
                <div>No blogs found.</div>
            )}
        </div>
    );
}

export default AllBlog;
