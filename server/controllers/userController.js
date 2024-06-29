const userModel = require('../Model/userModel');
const bcrypt = require("bcrypt");

// Register Controller
// async function registerController(req, res) {
//     try {
//         const { fullName, email, password, role, stream, position } = req.body
//         // validation
//         if (!fullName || !email || !password || !role || !stream || !position) {
//             return res.status(400).send({
//                 success: 'false',
//                 message: 'Fill all fields'
//             })
//         }
//         //existing user
//         const existingUser = await userModel.findOne({ email })
//         if (existingUser) {
//             return res.status(401).send({
//                 success: 'false',
//                 message: 'user already exists'
//             })
//         }

//         //protecting password
//         const hashedPassword = await bcrypt.hash(password, 10)

//         //save new user
//         const user = new userModel({ fullName, email, password: hashedPassword, role, stream, position })
//         await user.save()
//         return res.status(201).send({
//             success: 'true',
//             message: 'new user created',
//             user
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({
//             message: 'Error in register callback',
//             success: false,
//             error
//         })
//     }
// }

// async function registerController(req, res) {
//     try {
//         const { fullName, email, password, role, stream, position } = req.body;
//         // Validation
//         if (!fullName || !email || !password || !role || !stream || !position) {
//             return res.status(400).send({
//                 success: false,
//                 message: 'Fill all fields'
//             });
//         }

//         // Existing user
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.status(409).send({
//                 success: false,
//                 message: 'User already exists'
//             });
//         }

//         // Protecting password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Save new user
//         const user = new userModel({ fullName, email, password: hashedPassword, role, stream, position });
//         await user.save();
//         return res.status(201).send({
//             success: true,
//             message: 'New user created',
//             user
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({
//             message: 'Error in register callback',
//             success: false,
//             error
//         });
//     }
// }

async function registerController(req, res) {
    try {
        const { fullName, email, password, role, stream, position } = req.body;
        if (!fullName || !email || !password || !role || !stream || !position) {
            return res.status(400).send({
                success: false,
                message: 'Fill all fields',
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: 'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullName, email, password: hashedPassword, role, stream, position });
        await user.save();
        return res.status(201).send({
            success: true,
            message: 'New user created',
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Error in register callback',
            success: false,
            error,
        });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await userModel.find(); // Fetch all users from the database
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "All users data",
            users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Error in Get All Users',
            success: false,
            error
        })
    }
}

async function loginController(req, res) {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(401).send({
                sucess: false,
                message: 'please provide email and password'
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(200).send({
                sucess: false,
                message: 'email not registered'
            })
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).send({
                sucess: false,
                message: 'Invalid username or password'
            })
        }
        return res.status(200).send({
            sucess: true,
            message: 'Login Sucessfull',
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Login Callback',
            error
        })
    }
}

module.exports = { registerController, getAllUsers, loginController };
