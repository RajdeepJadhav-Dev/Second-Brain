
import { useRef, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

export function Signup() {
  const usernameref = useRef();
  const passwordref = useRef();
  const [error, setError] = useState('');  // To store error messages

  async function signup() {
    const username = usernameref.current.value;
    const password = passwordref.current.value;

    try {
      const res = await axios.post('http://localhost:3000/signup', {
        username,
        password,
      });

      // If successful, alert success message
      alert(res.data.msg);
      setError('');  // Clear any existing error message
    } catch (err) {
      // Catch error from Axios and handle the response
      if (err.response && err.response.data) {
        setError(err.response.data.msg);  // Set the error message from backend
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  return (
    <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-60 max-h-72 flex flex-col p-4 space-y-4">
        <label htmlFor="username">Username</label>
        <input className="border-2 border-black" type="text" id="username" ref={usernameref} />
        <label htmlFor="password">Password</label>
        <input className="border-2 border-black" type="password" id="password" ref={passwordref} />
        <button onClick={signup} className="border-2 border-black m-9">Signup</button>

        {/* Show error message if there's any */}
        {error && <div className="text-red-500">{error}</div>}

        <Link to="/signin" className="text-center text-blue-500 hover:underline">Sign In</Link>
      </div>
    </div>
  );
}


export function Signin(){
    const navigate = useNavigate();
    const usernameref = useRef();
    const passwordref = useRef();

    async function signin(){
        const username = usernameref.current.value;
        const password = passwordref.current.value;
        const res = await axios.post('http://localhost:3000/signin',{
            username:username,
            password:password
        })
        if (res.data.token) {
            const jwt = res.data.token;
            // Store the token in localStorage
            localStorage.setItem('token', jwt);
            // Navigate to the home page if the token is valid
            navigate('/');
          } else {
            // If no token is returned, display an error
            alert('Invalid credentials');
    }
    }

    return (
        <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
          <div className="bg-white w-60 max-h-72 flex flex-col p-4 space-y-4">
            <label htmlFor="username">Username</label>
            <input className="border-2 border-black" type="text" id="username" ref={usernameref} />
            <label htmlFor="password">Password</label>
            <input className="border-2 border-black" type="password" id="password" ref={passwordref} />
            <button onClick = {signin} className="border-2 border-black m-9">Signin</button>

          </div>
        </div>
      );
    }
    