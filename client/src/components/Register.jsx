// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';

// function Register() {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('');
//     const [year, setYear] = useState('');
//     const [stream, setStream] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Email validation regex pattern
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         // Password validation regex pattern
//         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

//         // Validate all fields
//         if (!fullName || !email || !password || !role || !stream) {
//             setErrorMessage('All fields are required.');
//             return;
//         }

//         // If role is student, validate year and stream
//         if (role === 'student' && (!year)) {
//             setErrorMessage('Current Year is required for students.');
//             return;
//         }

//         // Validate email
//         if (!emailPattern.test(email)) {
//             setErrorMessage('Please enter a valid email address.');
//             return;
//         }

//         // Validate password
//         if (!passwordPattern.test(password)) {
//             setErrorMessage('Password must contain at least 1 capital letter, 1 small letter, 1 number, 1 special character, and minimum length should be 6.');
//             return;
//         }

//         // If validation passes, clear error message and log the data
//         setErrorMessage('');
//         console.log('Full Name:', fullName);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Role:', role);
//         console.log('Year:', year);
//         console.log('Stream:', stream);
//         console.log('Photo:', photo);
//         setFullName('');
//         setEmail('');
//         setPassword('');
//         setRole('');
//         setYear('');
//         setStream('');
//         setPhoto(null);
//     };

//     return (
//         <>
//             <div className='flex justify-center items-center h-screen w-screen'>
//                 <div id="my_modal_4" className="">
//                     <div className="modal-box w-[600px]">
//                         <form onSubmit={handleSubmit}>
//                             <Link
//                                 to="/"
//                                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                                 onClick={() => document.getElementById("my_modal_3").close()}
//                             >
//                                 ✕
//                             </Link>
//                             <h3 className="font-bold text-lg mb-4">Register</h3>
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="fullName" className="text-sm mb-1">Full Name:</label>
//                                 <input
//                                     type="text"
//                                     id="fullName"
//                                     name="fullName"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter your full name"
//                                     value={fullName}
//                                     onChange={(e) => setFullName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="email" className="text-sm mb-1">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter your email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="password" className="text-sm mb-1">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="role" className="text-sm mb-1">Role:</label>
//                                 <select
//                                     id="role"
//                                     name="role"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     value={role}
//                                     onChange={(e) => setRole(e.target.value)}
//                                     required
//                                 >
//                                     <option value="">Select role</option>
//                                     <option value="student">Student</option>
//                                     <option value="faculty">Faculty</option>
//                                 </select>
//                             </div>
//                             {role === 'student' && (
//                                 <>
//                                     <div className="flex flex-col mb-4">
//                                         <label htmlFor="year" className="text-sm mb-1">Year:</label>
//                                         <select
//                                             id="year"
//                                             name="year"
//                                             className="border border-gray-300 rounded-md px-3 py-2"
//                                             value={year}
//                                             onChange={(e) => setYear(e.target.value)}
//                                             required
//                                         >
//                                             <option value="">Select year</option>
//                                             <option value="1st">1st</option>
//                                             <option value="2nd">2nd</option>
//                                             <option value="3rd">3rd</option>
//                                             <option value="4th">4th</option>
//                                         </select>
//                                     </div>
//                                 </>
//                             )}
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="stream" className="text-sm mb-1">Stream:</label>
//                                 <select
//                                     id="stream"
//                                     name="stream"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     value={stream}
//                                     onChange={(e) => setStream(e.target.value)}
//                                     required
//                                 >
//                                     <option value="">Select Department</option>
//                                     <option value="CSE">CSE</option>
//                                     <option value="CSD">CSD</option>
//                                     <option value="IT">IT</option>
//                                     <option value="AIML">AIML</option>
//                                     <option value="DS">DATA-SCIENCE</option>
//                                     <option value="ECE">ECE</option>
//                                     <option value="EE">EE</option>
//                                     <option value="ME">ME</option>
//                                     <option value="CE">CE</option>
//                                 </select>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <label htmlFor="photo" className="text-sm mb-1">Upload your Passport-size Photo:</label>
//                                 <input
//                                     type="file"
//                                     id="photo"
//                                     name="photo"
//                                     accept="image/*"
//                                     className="border border-gray-300 rounded-md px-3 py-2"
//                                     onChange={(e) => setPhoto(e.target.files[0])} // Store the selected file
//                                 />
//                             </div>
//                             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Register</button>
//                         </form>
//                         {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//                         <p className="py-4">Already registered? <Link className="text-blue-500 hover:underline" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Link></p>
//                         <Login />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Register;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [successMessage, setSuccessMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const selectedRole = watch('role');
    const navigate = useNavigate();

    const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/register', data);
            console.log('Response:', response.data);
            // Optionally, you can handle success message or navigation after successful registration
            alert('Registration successful! Please login.'); // Display success message
            navigate('/');
        } catch (error) {
            console.error('Error:', error.response.data);
            // Optionally, you can handle error message or any other logic
        }
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen w-screen'>
                <div id="my_modal_4" className="">
                    <div className="modal-box w-[600px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg mb-4">Register</h3>
                            {successMessage && (
                                <p className="text-green-500 mb-4">{successMessage}</p>
                            )}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="fullName" className="text-sm mb-1">Full Name:</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    placeholder="Enter your full name"
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && <p className="text-red-500 mt-1">Full name is required.</p>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="text-sm mb-1">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    placeholder="Enter your email"
                                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                />
                                {errors.email && <p className="text-red-500 mt-1">Please enter a valid email address.</p>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="password" className="text-sm mb-1">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    placeholder="Enter your password"
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                {errors.password && <p className="text-red-500 mt-1">Password must contain at least 6 characters.</p>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="role" className="text-sm mb-1">Role:</label>
                                <select
                                    id="role"
                                    name="role"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    {...register("role", { required: true })}
                                >
                                    <option value="">Select role</option>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                </select>
                                {errors.role && <p className="text-red-500 mt-1">Role is required.</p>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="stream" className="text-sm mb-1">Stream:</label>
                                <select
                                    id="stream"
                                    name="stream"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    {...register("stream", { required: true })}
                                >
                                    <option value="">Select Department</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSD">CSD</option>
                                    <option value="IT">IT</option>
                                    <option value="AIML">AIML</option>
                                    <option value="DS">DATA-SCIENCE</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EE">EE</option>
                                    <option value="ME">ME</option>
                                    <option value="CE">CE</option>
                                </select>
                                {errors.stream && <p className="text-red-500 mt-1">Stream is required.</p>}
                            </div>
                            {/* Additional fields for student role */}
                            {selectedRole === 'student' && (
                                <>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="year" className="text-sm mb-1">Current Year:</label>
                                        <select
                                            id="year"
                                            name="year"
                                            className="border border-gray-300 rounded-md px-3 py-2"
                                            {...register("year", { required: true })}
                                        >
                                            <option value="">Select Year</option>
                                            <option value="1st">1st</option>
                                            <option value="2nd">2nd</option>
                                            <option value="3rd">3rd</option>
                                            <option value="4th">4th</option>
                                        </select>
                                        {errors.year && <p className="text-red-500 mt-1">Year is required.</p>}
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="position" className="text-sm mb-1">Position:</label>
                                        <select
                                            id="position"
                                            name="position"
                                            className="border border-gray-300 rounded-md px-3 py-2"
                                            {...register("position", { required: true })}
                                        >
                                            <option value="">Select Position</option>
                                            <option value="Member">Member</option>
                                            <option value="President">President</option>
                                            <option value="Vice President">Vice President</option>
                                            <option value="Secretary">Secretary</option>
                                            <option value="Event Coordinator">Event Coordinator</option>
                                            <option value="Technical Lead">Technical Lead</option>
                                            <option value="Project Manager">Project Manager</option>
                                        </select>
                                        {errors.position && <p className="text-red-500 mt-1">Position is required.</p>}
                                    </div>
                                </>
                            )}
                            {selectedRole === 'faculty' && (
                                <>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="position" className="text-sm mb-1">Position:</label>
                                        <select
                                            id="position"
                                            name="position"
                                            className="border border-gray-300 rounded-md px-3 py-2"
                                            {...register("position", { required: true })}
                                        >
                                            <option value="">Select Position</option>
                                            <option value="Faculty Advisor">Faculty Advisor</option>
                                            <option value="Technical Mentor">Technical Mentor</option>
                                            <option value="Resource Coordinator">Resource Coordinator</option>
                                        </select>
                                        {errors.position && <p className="text-red-500 mt-1">Position is required.</p>}
                                    </div>
                                </>
                            )}
                            {/* <div className="flex flex-col mb-4">
                                <label htmlFor="photo" className="text-sm mb-1">Upload your Passport-size Photo:</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                    {...register("photo", { required: true })}
                                />
                                {errors.photo && <p className="text-red-500 mt-1">Photo is required.</p>}
                            </div> */}
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Register</button>
                        </form>
                        {/* No need for errorMessage state, error messages will be handled by React Hook Form */}
                        <p className="py-4">Already registered? <Link className="text-blue-500 hover:underline" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Link></p>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
