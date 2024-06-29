import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post('http://localhost:3001/api/v1/user/login', data);
  //     console.log('Login Response:', response.data);
  //     dispatch(authActions.login());
  //     alert('Login successful!'); // Display success message
  //     navigate('/');
  //     const userId = response.data.user._id; // Extract user ID from the response
  //     localStorage.setItem('userId', userId);

  //   } catch (error) {
  //     console.error('Login Error:', error.response.data);
  //     // Optionally, you can handle error message or any other logic
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', data);
      console.log('Login Response:', response.data);
      dispatch(authActions.login());
      alert('Login successful!'); // Display success message
      navigate('/');
      const userId = response.data.user._id; // Extract user ID from the response
      localStorage.setItem('userId', userId);
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials and try again.'); // Display error message
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg mb-4">Login</h3>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-sm mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 mt-1">Please enter a valid email address.</p>}
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="password" className="text-sm mb-1">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p className="text-red-500 mt-1">Password is required.</p>}
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Login</button>
            </form>
            <p className="py-4">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { authActions } from '../redux/store';

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/v1/user/login', data);
//       console.log('Login Response:', response.data);
//       const userId = response.data.user._id; // Extract user ID from the response
//       dispatch(authActions.login({ userId }));
//       alert('Login successful!'); // Display success message
//       navigate('/');
//     } catch (error) {
//       console.error('Login Error:', error.response?.data || error.message);
//       alert('Login failed. Please check your credentials and try again.'); // Display error message
//     }
//   };

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_3" className="modal">
//           <div className="modal-box">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                 onClick={() => document.getElementById("my_modal_3").close()}
//               >
//                 ✕
//               </Link>
//               <h3 className="font-bold text-lg mb-4">Login</h3>
//               <div className="flex flex-col mb-4">
//                 <label htmlFor="email" className="text-sm mb-1">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="Enter your email"
//                   {...register("email", { required: true })}
//                 />
//                 {errors.email && <p className="text-red-500 mt-1">Please enter a valid email address.</p>}
//               </div>
//               <div className="flex flex-col mb-4">
//                 <label htmlFor="password" className="text-sm mb-1">Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="Enter your password"
//                   {...register("password", { required: true })}
//                 />
//                 {errors.password && <p className="text-red-500 mt-1">Password is required.</p>}
//               </div>
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">Login</button>
//             </form>
//             <p className="py-4">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Login;
