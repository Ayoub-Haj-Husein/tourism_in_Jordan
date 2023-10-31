import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const cookie = require('cookie');


const backgroundImageUrl = 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80&w=1774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const loginStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Login() {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
       const token =response.data.token;
       
       document.cookie = `token=${token}; path=/`;

        alert('Login successful!');
        navigate("/");
        
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center" style={loginStyle}>
      <div className="container mx-80 p-4 formlogin bg-white bg-opacity-50 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Login</h1>

        <form onSubmit={handleLogin} className="md:w-1/2 lg:w-1/3 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 fig" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline btnlog"
            type="submit" onSubmit={handleLogin}
          >
            Login
          </button>
          <p className="text-red-600 mt-2">{error}</p>
          <Link to="/registerform"><p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register !</a>
          </p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
























// import React from "react";
// import { Link } from "react-router-dom";
// import { TEInput, TERipple } from "tw-elements-react";

//  function LOGINFORM(){
//   return (
//    <div>
// <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-6.0">
//   <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//     <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
//     <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
//   </div>

//   <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <form class="space-y-6" action="/login" method="POST">
//       <div >
//         <div class="flex items-center justify-between"><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label></div>
//         <div class="mt-2">
//           <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//         </div>
//       </div>

//       <div>

//         <div class="flex items-center justify-between">
//           <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
//         </div>

//         <div class="mt-2">
//           <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//           <div class="text-sm">
//             <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//           </div>
//         </div>

//       </div>

//       <div>
//         <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//       </div>
//     </form>

//     <Link to="/registerform"><p class="mt-10 text-center text-sm text-gray-500">
//       Not a member?
//       <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register !</a>
//     </p></Link>
//   </div>
// </div>

// </div>
//   );
// }

// export default LOGINFORM