// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const CreateBlog = () => {
//     const navigate = useNavigate();
//     const userId = localStorage.getItem("userId");

//     const [isModalOpen, setIsModalOpen] = useState(true);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         // For example, you might want to call an API to create a blog post
//     };

//     return (
//         <div className='flex justify-center items-center h-screen w-screen'>
//             {isModalOpen && (
//                 <div id="create_blog_modal" className="">
//                     <div className="modal-box w-[600px]">
//                         <form onSubmit={handleSubmit}>
//                             <Link to="/blogs">
//                                 <button
//                                     type="button"
//                                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                                 >
//                                     close
//                                 </button>
//                             </Link >
//                             <h3 className="font-bold text-lg mb-4">Create Blog</h3>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="image" className="text-sm mb-1">Image URL:</label>
//                                 <input
//                                     type="text"
//                                     id="image"
//                                     name="image"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter image URL"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="title" className="text-sm mb-1">Title:</label>
//                                 <input
//                                     type="text"
//                                     id="title"
//                                     name="title"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog title"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="description" className="text-sm mb-1">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog description"
//                                 />
//                             </div>

//                             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Create Blog</button>

//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreateBlog;

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const CreateBlog = () => {
//     const navigate = useNavigate();
//     const userId = localStorage.getItem("userId");

//     const [isModalOpen, setIsModalOpen] = useState(true);

//     const [formData, setFormData] = useState({
//         image: '',
//         title: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     console.log("User ID:", userId); // Log the user ID
//     //     try {
//     //         const response = await axios.post('http://localhost:3001/api/v1/blog/create-blog', {
//     //             title: formData.title,
//     //             description: formData.description,
//     //             image: formData.image,
//     //             user: userId // Ensure userId is a valid MongoDB ObjectId string
//     //         });
//     //         console.log('Response:', response.data);
//     //         if (response.data && response.data.success) {
//     //             alert('Blog published!');
//     //             navigate('/blogs');
//     //         } else {
//     //             console.log('Unexpected response data:', response.data);
//     //             alert('Failed to publish blog');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //         if (error.response) {
//     //             console.log('Error response:', error.response.data);
//     //         }
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3001/api/v1/blog/create-blog', {
//                 title: formData.title,
//                 description: formData.description,
//                 image: formData.image,
//                 user: userId
//             });
//             console.log('Response:', response.data);
//             if (response.data && response.data.success) {
//                 alert('Blog published!');
//                 navigate('/blogs');
//             } else {
//                 console.log('Unexpected response data:', response.data);
//                 alert('Failed to publish blog');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             if (error.response) {
//                 console.log('Error response:', error.response.data);
//                 alert(error.response.data.message || 'Failed to publish blog');
//             }
//         }
//     };


//     return (
//         <div className='flex justify-center items-center h-screen w-screen'>
//             {isModalOpen && (
//                 <div id="create_blog_modal" className="">
//                     <div className="modal-box w-[600px]">
//                         <form onSubmit={handleSubmit}>
//                             <Link to="/blogs">
//                                 <button
//                                     type="button"
//                                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                                 >
//                                     close
//                                 </button>
//                             </Link>
//                             <h3 className="font-bold text-lg mb-4">Create Blog</h3>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="image" className="text-sm mb-1">Image URL:</label>
//                                 <input
//                                     type="text"
//                                     id="image"
//                                     name="image"
//                                     value={formData.image}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter image URL"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="title" className="text-sm mb-1">Title:</label>
//                                 <input
//                                     type="text"
//                                     id="title"
//                                     name="title"
//                                     value={formData.title}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog title"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="description" className="text-sm mb-1">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={formData.description}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog description"
//                                 />
//                             </div>

//                             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Create Blog</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreateBlog;


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const CreateBlog = () => {
//     const navigate = useNavigate();
//     const userId = localStorage.getItem("userId");

//     const [isModalOpen, setIsModalOpen] = useState(true);

//     const [formData, setFormData] = useState({
//         image: '',
//         title: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const userRole = localStorage.getItem("userRole"); // Fetch user role
//             console.log("userrole : ", userRole);
//             const response = await axios.post('http://localhost:3001/api/v1/blog/create-blog', {
//                 title: formData.title,
//                 description: formData.description,
//                 image: formData.image,
//                 user: userId, // Ensure userId is a valid MongoDB ObjectId string
//                 role: userRole // Include user role in the request
//             });
//             console.log('Response:', response.data);
//             // Handle success or navigate to the next page
//             // navigate('/blogs');
//         } catch (error) {
//             console.error('Error:', error);
//             if (error.response) {
//                 console.log('Error response:', error.response.data);
//             }
//         }
//     };



//     return (
//         <div className='flex justify-center items-center h-screen w-screen'>
//             {isModalOpen && (
//                 <div id="create_blog_modal" className="">
//                     <div className="modal-box w-[600px]">
//                         <form onSubmit={handleSubmit}>
//                             <Link to="/blogs">
//                                 <button
//                                     type="button"
//                                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                                 >
//                                     close
//                                 </button>
//                             </Link>
//                             <h3 className="font-bold text-lg mb-4">Create Blog</h3>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="image" className="text-sm mb-1">Image URL:</label>
//                                 <input
//                                     type="text"
//                                     id="image"
//                                     name="image"
//                                     value={formData.image}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter image URL"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="title" className="text-sm mb-1">Title:</label>
//                                 <input
//                                     type="text"
//                                     id="title"
//                                     name="title"
//                                     value={formData.title}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog title"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="description" className="text-sm mb-1">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={formData.description}
//                                     onChange={handleChange}
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter blog description"
//                                 />
//                             </div>

//                             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Create Blog</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreateBlog;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have the user ID stored in local storage or context
            const userId = localStorage.getItem('userId');
            const response = await axios.post('http://localhost:3001/api/v1/blog/create-blog', {
                ...formData,
                userId,
            });
            if (response.data.success) {
                navigate('/blogs');
            } else {
                alert('Error creating blog');
            }
        } catch (error) {
            console.error('Error creating blog:', error);
            alert('Error creating blog');
        }
    };

    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div id="create_blog_modal">
                <div className="modal-box w-[600px]">
                    <form onSubmit={handleSubmit}>
                        <Link to="/blogs">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                close
                            </button>
                        </Link>
                        <h3 className="font-bold text-lg mb-4">Create Blog</h3>

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

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Create Blog</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;

