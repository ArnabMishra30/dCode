import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const BlogDetails = () => {

    const [blog, setBlog] = useState({})
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/api/v1/blog/update-blog/${id}`, {
                title: formData.title,
                description: formData.description,
                image: formData.image,
                user: userId
            });
            console.log('Response:', response.data); // Log the entire response data for debugging
            if (response.data && response.data.sucess) {
                alert('Blog Updated!');
                navigate('/my-blog');
            } else {
                console.log('Unexpected response data:', response.data); // Log unexpected responses
                alert('Failed to publish blog');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log('Error response:', error.response.data); // Log detailed error response
            }
            // alert('Failed to publish blog'); // Generic error handling/
        }
    };

    const id = useParams().id
    //get blog details
    const getBlogDetail = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/v1/blog/get-blog/${id}`)
            if (data?.sucess) {
                setBlog(data?.blog)
                setFormData({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlogDetail(blog);
    }, [id]);

    console.log();

    return (
        <div>
            <div className='flex justify-center items-center h-screen w-screen'>
                {isModalOpen && (
                    <div id="create_blog_modal" className="">
                        <div className="modal-box w-[600px]">
                            <form onSubmit={handleSubmit}>
                                <Link to="/my-blog">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    >
                                        close
                                    </button>
                                </Link>
                                <h3 className="font-bold text-lg mb-4">Update previous Blog</h3>

                                <div className="flex flex-col mb-4">
                                    <label htmlFor="image" className="text-sm mb-1">Image URL:</label>
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-3 py-2"
                                        placeholder="Enter image URL"
                                    />
                                </div>

                                <div className="flex flex-col mb-4">
                                    <label htmlFor="title" className="text-sm mb-1">Title:</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-3 py-2"
                                        placeholder="Enter blog title"
                                    />
                                </div>

                                <div className="flex flex-col mb-4">
                                    <label htmlFor="description" className="text-sm mb-1">Description:</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-3 py-2"
                                        placeholder="Enter blog description"
                                    />
                                </div>

                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 duration-300">Update Blog</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default BlogDetails