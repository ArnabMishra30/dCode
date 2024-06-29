const { response } = require('express');
const mongoose = require('mongoose')
const blogModel = require('../Model/blogModel')
const userModel = require('../Model/userModel')

//get all blogs
// async function getAllBlogsController(req, res) {
//     try {
//         const blogs = await blogModel.find({}).populate("user");
//         if (!blogs) {
//             return res.status(200).send({
//                 sucess: false,
//                 message: "no blogs found",
//             });
//         }
//         return res.status(200).send({
//             sucess: true,
//             BlogCount: blogs.length,
//             message: "All blogs list",
//             blogs,
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({
//             sucess: false,
//             message: "Error while getting all blogs",
//             error,
//         })
//     }
// }

// Backend response for all blogs
async function getAllBlogsController(req, res) {
    try {
        const blogs = await blogModel.find({}).populate("user");
        if (blogs.length === 0) {
            return res.status(200).send({
                success: false,
                message: "No blogs found",
            });
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All blogs list",
            blogs,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error while getting all blogs",
            error,
        })
    }
}


async function createBlogController(req, res) {
    try {
        const { title, description, image, userId } = req.body;

        // Validation
        if (!title || !description || !image || !userId) {
            return res.status(400).send({
                success: false,
                message: 'All fields are required',
            });
        }

        // Verify user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        // Create new blog
        const newBlog = new blogModel({
            title,
            description,
            image,
            user: userId,
        });
        await newBlog.save();

        return res.status(201).send({
            success: true,
            message: 'Blog created successfully',
            blog: newBlog,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Error creating blog',
            error,
        });
    }
}



//update blog
async function updateBlogController(req, res) {
    try {
        const { id } = req.params
        const { title, description, image } = req.body
        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            sucess: true,
            message: "blog updated",
            blog,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            sucess: false,
            message: "error in update blog",
            error,
        })
    }
}

//single blog
async function getBlogByIdController(req, res) {
    try {
        const { id } = req.params
        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(404).send({
                sucess: false,
                message: "no blog found with this id",
            })
        }
        return res.status(200).send({
            sucess: true,
            message: "fetched single blog",
            blog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            sucess: false,
            message: "error in get blog by id",
            error,
        })
    }
}

//delete blog
async function deleteBlogController(req, res) {
    try {
        const blog = await blogModel
            // .findOneAndDelete(req.params.id)
            .findByIdAndDelete(req.params.id)
            .populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        return res.status(200).send({
            sucess: true,
            message: 'Blog Deleted'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            sucess: false,
            message: 'Error while deleteing single blog',
            error
        })
    }
}

//get user blog
// async function userBlogController(req, res) {
//     try {
//         const userBlog = await userModel.findById(req.params.id).populate("blogs");
//         if (!userBlog) {
//             return res.status(404).send({
//                 sucess: false,
//                 message: "blogs not found with this id",
//             });
//         }
//         return res.status(200).send({
//             sucess: true,
//             message: "user blogs",
//             userBlog,
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(400).send({
//             sucess: false,
//             message: "error while getting user blog",
//             error,
//         })
//     }
// }

async function userBlogController(req, res) {
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs");
        if (!userBlog) {
            return res.status(404).send({
                success: false,
                message: "User not found with this ID",
            });
        }

        if (!userBlog.blogs || userBlog.blogs.length === 0) {
            console.log(`No blogs found for user ID: ${req.params.id}`);
        } else {
            console.log(`Blogs found for user ID: ${req.params.id}:`, userBlog.blogs);
        }

        return res.status(200).send({
            success: true,
            message: "User blogs",
            userBlog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error while getting user blogs",
            error,
        });
    }
}


module.exports = { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController };