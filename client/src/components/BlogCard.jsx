import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogCard({ title, description, imageUrl, fullname, time, id, isUser }) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`)
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/api/v1/blog/delete-blog/${id}`)
            if (data?.sucess) {
                alert("Blog Deleted!!")
                navigate(`/my-blog`)
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
                {imageUrl && <img className="w-full" src={imageUrl} alt="Blog Image" />}
                <div className="px-6 py-4">
                    <div className="text-orange-200 font-bold text-xl mb-2">{title}  -- <span className="text-pink-400">{fullname}</span></div>
                    <p className="text-gray-200 text-base">{description}</p>
                    <div className="flex justify-between mt-4">
                        <span className="text-gray-400">{fullname}</span>
                        <span className="text-gray-400">{time}</span>
                    </div>
                    {isUser && (
                        <div className="flex justify-end mt-4 space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" onClick={handleEdit}>Edit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300" onClick={handleDelete}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default BlogCard;
