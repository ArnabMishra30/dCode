const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'faculty']
    },
    stream: {
        type: String,
        required: true
    },
    year: {
        type: String
    },
    position: {
        type: String
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        }
    ]
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

// const mongoose = require('mongoose');

// // Base schema
// const userSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     stream: {
//         type: String,
//         required: true
//     },
//     position: {
//         type: String,
//         required: true
//     },
//     blogs: [{
//         type: mongoose.Types.ObjectId,
//         ref: "Blog"
//     }]
// }, { timestamps: true });

// // Student schema extending base schema
// const studentSchema = new mongoose.Schema({
//     year: {
//         type: String,
//         required: true
//     }
// });

// Faculty schema extending base schema
// const facultySchema = new mongoose.Schema({});

// // Create models using discriminators
// const User = mongoose.model('User', userSchema);
// const Student = User.discriminator('Student', studentSchema);
// const Faculty = User.discriminator('Faculty', facultySchema);

// module.exports = { User, Student, Faculty };
